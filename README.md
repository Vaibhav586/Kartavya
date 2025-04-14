# Kartavya – A B2B Food Redistribution Platform

Kartavya is a tech-enabled, not-for-profit platform developed to combat food waste and hunger. It connects food donors—such as restaurants, event venues, and mess halls—with verified NGOs and community kitchens. By facilitating the safe redistribution of surplus food, Kartavya aligns with the United Nations Sustainable Development Goal #2: Zero Hunger.

## 🌟 Key Features

- **Donor-NGO Matching**: Seamlessly connects food donors with nearby NGOs based on real-time availability and demand.
- **Verified User Network**: Ensures that all participants are vetted to maintain trust and accountability.
- **Transparent Tracking**: Offers real-time tracking of food donations from pickup to delivery.
- **Smart Logistics**: Optimizes routes and schedules to ensure timely and safe food deliveries.
- **Impact Analytics**: Provides dashboards to monitor key metrics such as meals delivered and food saved.

## 🛠️ Tech Stack

- **Frontend**: React with TypeScript, styled using Tailwind CSS.
- **Backend**: Supabase for database management and authentication.
- **Build Tool**: Vite for fast and efficient development.
- **Hosting**: Deployed on Vercel for scalable and reliable performance.

## 🚀 Getting Started

To set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Vaibhav586/Kartavya.git
   cd Kartavya
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file in the root directory and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

## 📦 Project Structure

```
Kartavya/
├── src/                   # Source code
│   ├── components/        # Reusable UI components
│   ├── pages/             # Page components
│   ├── services/          # API services and utilities
│   └── ...                # Other directories
├── supabase/              # Supabase migrations and configurations
├── public/                # Static assets
├── .env                   # Environment variables
├── package.json           # Project metadata and scripts
└── README.md              # Project documentation
```

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

## 📬 Contact

For questions or feedback, please contact [Vaibhav586](https://github.com/Vaibhav586).
