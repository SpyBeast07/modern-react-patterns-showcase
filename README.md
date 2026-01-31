# Modern React Features Showcase

This project demonstrates a modern React application architecture, showcasing various state management libraries, form handling techniques, routing, and API integration patterns.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)

### Installation
```bash
npm install
```

### Run Locally
```bash
npm run dev
```

## 📂 Project Structure

The project is organized to demonstrate different implementations of similar features clearly.

- `src/api/` - API call definitions.
- `src/components/` - Reusable UI components and form examples.
- `src/themes/` - Theme switcher logic implemented in 3 different ways.
- `src/store/` - Global state stores.
- `src/routes/` - Page routes and layouts.
- `src/code-router/` - Custom router implementation (if applicable).

## ✨ Features & Implementations

### 1. API Calls & Data Fetching
- **Axios**: Configured in `src/api/posts.ts` for HTTP requests.
- **TanStack Query**: Used for data fetching, caching, and synchronization server state.

### 2. Routing
- **TanStack Router**: Type-safe routing handling file-based routes in `src/routes/`.

### 3. Forms & Validation
- **React Hook Form**: Performant form handling located in `src/components/ReactHookForm.tsx`.
- **Zod**: Schema validation used completely with React Hook Form for type-safe inputs.

### 4. State Management
Different state management libraries are implemented to demonstrate their usage:
- **Zustand**: Lightweight state management (`src/store/` & `src/themes/zustand/`).
- **Context API**: React's built-in state management (`src/themes/context/`).
- **Redux Toolkit**: Robust state management (`src/themes/redux/`).

### 5. Theme Switcher
A theme switcher feature is implemented using three different state management approaches to compare them:
- **Context API Implementation**: `src/themes/context/`
- **Redux Toolkit Implementation**: `src/themes/redux/`
- **Zustand Implementation**: `src/themes/zustand/`
