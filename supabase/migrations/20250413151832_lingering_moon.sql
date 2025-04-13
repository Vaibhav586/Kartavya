/*
  # Initial Schema Setup for Kartavya Platform

  1. New Tables
    - profiles
      - User profiles for donors, NGOs, volunteers, and admins
    - food_listings
      - Food donation listings from providers
    - donation_requests
      - Requests from NGOs for food listings
    
  2. Security
    - Enable RLS on all tables
    - Add policies for data access based on user roles
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  email text UNIQUE NOT NULL,
  full_name text NOT NULL,
  organization_name text,
  organization_type text NOT NULL CHECK (organization_type IN ('DONOR', 'NGO', 'VOLUNTEER', 'ADMIN')),
  phone text,
  address text,
  verified boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create food_listings table
CREATE TABLE IF NOT EXISTS food_listings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  donor_id uuid REFERENCES profiles(id) NOT NULL,
  food_type text NOT NULL,
  quantity numeric NOT NULL,
  unit text NOT NULL,
  expiry_time timestamptz NOT NULL,
  pickup_time timestamptz NOT NULL,
  status text DEFAULT 'AVAILABLE' CHECK (status IN ('AVAILABLE', 'CLAIMED', 'PICKED_UP', 'DELIVERED')),
  location jsonb NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create donation_requests table
CREATE TABLE IF NOT EXISTS donation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  listing_id uuid REFERENCES food_listings(id) NOT NULL,
  ngo_id uuid REFERENCES profiles(id) NOT NULL,
  status text DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'APPROVED', 'REJECTED', 'COMPLETED')),
  volunteer_id uuid REFERENCES profiles(id),
  pickup_time timestamptz,
  delivery_time timestamptz,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE food_listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE donation_requests ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can read their own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Food listings policies
CREATE POLICY "Anyone can view available food listings"
  ON food_listings
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Donors can create food listings"
  ON food_listings
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid()
      AND organization_type = 'DONOR'
      AND verified = true
    )
  );

CREATE POLICY "Donors can update their own listings"
  ON food_listings
  FOR UPDATE
  TO authenticated
  USING (donor_id = auth.uid());

-- Donation requests policies
CREATE POLICY "NGOs can create donation requests"
  ON donation_requests
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid()
      AND organization_type = 'NGO'
      AND verified = true
    )
  );

CREATE POLICY "Users can view their related donation requests"
  ON donation_requests
  FOR SELECT
  TO authenticated
  USING (
    ngo_id = auth.uid() OR
    EXISTS (
      SELECT 1 FROM food_listings
      WHERE food_listings.id = listing_id
      AND food_listings.donor_id = auth.uid()
    ) OR
    volunteer_id = auth.uid()
  );