# Next.js Auth Dashboard

A simple authentication flow built with **Next.js App Router**, **TypeScript**, and **SCSS Modules**. It includes form validation with **Zod**, reusable components, context-based user handling, and automatic redirection based on login state.

## 🚀 Features

- ✅ Authentication with RandomUser API (`https://randomuser.me/api`)
- ✅ Phone number validation (Iranian format)
- ✅ Context-based user management
- ✅ Dynamic form validation using Zod
- ✅ Protected route (`/dashboard`)
- ✅ Responsive UI with SCSS Modules
- ✅ Reusable `<Input />` and `<Button />` components

## 🧩 Tech Stack

- **Next.js** (App Router)
- **React** (with hooks)
- **TypeScript**
- **SCSS Modules**
- **Zod** for validation
- **Context API** for auth state

## 📁 Folder Structure

/app
/auth
page.tsx
/dashboard
page.tsx
/components
Input.tsx
Button.tsx
/context
AuthContext.tsx
/lib
validation.ts (Zod schema)
fetchUser.ts (API logic)
/styles
globals.scss
Input.module.scss
Button.module.scss
page.module.scss



## 🔐 Authentication Flow

1. User opens `/auth`
2. Enters a valid Iranian mobile number (must start with `09` and be 11 digits)
3. Clicks **Login**
4. App fetches data from `https://randomuser.me/api/?results=1&nat=us`
5. User data is stored in React Context and optionally `localStorage`
6. User is redirected to `/dashboard`
7. If no user data exists, user is redirected back to `/auth`

## 🛠 Setup & Run Locally

```bash
git clone https://github.com/your-username/nextjs-auth-dashboard.git
cd nextjs-auth-dashboard

npm install

npm run dev



Visit http://localhost:3000/auth to start.

📦 Environment
No .env setup is required — all data is fetched from https://randomuser.me/api.

🧪 Validation Schema
Validation is handled by Zod, and currently includes:

✅ Phone number must be 11 digits

✅ Must start with 09

✅ Cannot be empty

