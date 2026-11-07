# Bakery Bliss

Bakery Bliss is a full-stack bakery storefront and admin dashboard built with React + Vite, Supabase, and modern front-end tooling. The app allows customers to browse cakes, customize designs, place orders, track payments, and manage account details, while admins can manage inventory, orders, recipes, assets, blocked dates, and QR-based upload workflows.

## Features

### Customer experience
- Landing page and bakery branding
- Cake catalog and product browsing
- Custom cake designer using a canvas-based editor
- Cart and checkout flow with payment tracking
- QR code generation for order payment tracking
- Customer profile and account management
- Contact form and support page
- Terms and privacy policy pages
- Role-based route protection for customer access

### Admin experience
- Inventory tracking and stock management
- Order management with status updates and payment processing
- Cake management and catalogue administration
- Recipe management
- Asset and ingredient management
- Blocked date scheduling for unavailable delivery dates
- QR code upload workflow for admin processing
- Real-time updates powered by Supabase subscriptions

## Tech Stack
- React 19
- Vite 7
- React Router
- Framer Motion
- Supabase JS client
- Google Maps API
- EmailJS
- Fabric.js for custom cake design canvas
- QRCode generation
- React Hot Toast

## Project Structure

```text
bakery-bliss/
├── public/                  # Static assets and images
├── src/
│   ├── Pages/               # Customer and admin pages
│   ├── components/          # Shared components
│   ├── context/             # Auth and route protection logic
│   ├── hooks/               # Reusable hooks
│   ├── sections/            # Admin dashboard sections
│   ├── App.jsx              # Route configuration
│   ├── index.css            # Global styles
│   ├── main.jsx             # App entry point
│   └── supabaseClient.js    # Supabase client setup
├── supabase/
│   └── functions/           # Edge function code
├── .env.example             # Environment variable template
├── eslint.config.js
├── index.html
├── package.json
├── vercel.json
├── vite.config.js
└── README.md
```

## Prerequisites

Before running the project, make sure you have:
- Node.js 18+ and npm installed
- A Supabase project created
- A Google Maps API key for the About Us map page
- Access to EmailJS credentials if you want the contact/order email features to work

## Environment Setup

Create a `.env` file in the project root using the values from your Supabase and Google Maps configuration:

```bash
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

You can also copy the template from `.env.example`:

```bash
cp .env.example .env
```

## Supabase Requirements

This project relies on a Supabase backend. Make sure your project includes the tables and storage buckets used by the app, including patterns such as:
- CUSTOMER
- ADMIN
- ORDER
- PAYMENT
- CAKE
- CAKE-ORDERS
- CUSTOM-CAKE
- INVENTORY
- INGREDIENT
- ASSET
- BLOCKED-DATES
- related storage buckets for cake and asset uploads

The app uses Supabase Auth for sign up, sign in, Google sign in, password reset, and session handling.

## Installation

```bash
npm install
```

## Running the app

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Production build

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

The project is configured for Vercel-style SPA routing using `vercel.json`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

When deploying to Vercel or another hosting provider:
1. Add the environment variables above to your host configuration.
2. Ensure your Supabase project allows the deployed domain.
3. Set up any required Auth redirect URLs.

## Email Configuration

The app currently uses EmailJS directly in source files for the contact form and order email notifications. For production, update the service ID, template ID, and public key in the relevant components before deployment.

## Scripts

```bash
npm run dev      # Run the app in development mode
npm run build    # Create a production build
npm run preview  # Preview the production build
npm run lint     # Run ESLint checks
```

## Notes

- The app expects a configured Supabase environment and database schema before it can fully function.
- Routes such as `/profile` and `/adminpage` are protected by role checks.
- The custom cake designer is interactive and requires the browser to support canvas rendering and fonts.

## License

This project is currently unlicensed unless a project-specific license is added later.
