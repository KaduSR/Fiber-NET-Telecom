# FiberNet Telecom Mobile App

This is the mobile application for FiberNet Telecom.

## Folder Structure

- `src/assets/`: Images, icons, fonts
- `src/components/`: Reusable UI components
- `src/screens/`: Main application screens (Login, Dashboard, Invoices, Support)
- `src/navigation/`: Navigation configuration (Stack, Tab, Drawer)
- `src/services/`: Functions for interacting with the API
- `src/contexts/`: Context API or Redux for global state management
- `src/hooks/`: Custom hooks
- `src/App.js`: Root application component

## Getting Started

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Run the app:**
    ```bash
    npm start
    ```
    This will open Expo Dev Tools in your browser. You can then choose to run on Android, iOS, or web.

## Environment Variables

Create a `.env` file in the `mobile/` directory based on `.env.example` and fill in the necessary values.

```
API_URL=http://localhost:3000/api
```

