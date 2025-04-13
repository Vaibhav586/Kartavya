export interface Profile {
  id: string;
  email: string;
  full_name: string;
  organization_name?: string;
  organization_type: 'DONOR' | 'NGO' | 'VOLUNTEER' | 'ADMIN';
  phone: string;
  address: string;
  verified: boolean;
  created_at: string;
}

export interface FoodListing {
  id: string;
  donor_id: string;
  food_type: string;
  quantity: number;
  unit: string;
  expiry_time: string;
  pickup_time: string;
  status: 'AVAILABLE' | 'CLAIMED' | 'PICKED_UP' | 'DELIVERED';
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  created_at: string;
}

export interface DonationRequest {
  id: string;
  listing_id: string;
  ngo_id: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'COMPLETED';
  volunteer_id?: string;
  pickup_time?: string;
  delivery_time?: string;
  created_at: string;
}