// Import React and hooks for creating context and managing state
import React, { createContext, useState } from 'react';

// Create a React Context for sharing theme state across the app without prop drilling
export const ThemeContext = createContext();

// ThemeProvider component - wraps the app and provides theme state to all child components
export function ThemeProvider({ children }) {
  // State to track whether dark mode is enabled (false = light mode, true = dark mode)
  const [darkMode, setDarkMode] = useState(false);

  // Provide the theme state and setter function to all child components via Context
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {/* Render all child components wrapped by this provider */}
      {children}
    </ThemeContext.Provider>
  );
}