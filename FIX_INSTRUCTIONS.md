# Fix for "Invalid URL: An explicit scheme must be provided" Error

## Problem
The error occurs because `VITE_FRONTEND_URL` is not defined in your `.env` file.

In `src/components/checkout/PaymentForm.jsx`, the Stripe return_url is constructed as:
```
javascript
return_url: `${import.meta.env.VITE_FRONTEND_URL}/order-confirm`,
```

When `VITE_FRONTEND_URL` is undefined, the URL becomes invalid.

## Solution
Add the following to your `.env` file:

```
VITE_FRONTEND_URL=http://localhost:5173
```

## Required Environment Variables
Make sure your `.env` file has these variables:

```
# Frontend URL (required for Stripe payment redirect)
VITE_FRONTEND_URL=http://localhost:5173

# Backend URL
VITE_BACK_END_URL=http://localhost:5000

# Stripe Publishable Key
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
```

## Important Notes
1. All URLs MUST include the scheme (http:// or https://)
2. After updating `.env`, restart your development server
3. The frontend runs on port 5173 by default (Vite default)
