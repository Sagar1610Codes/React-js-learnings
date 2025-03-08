import { createContext, useContext } from "react";

export const themeContext = createContext({
    Theme: "light",
    darkTheme : () => {},
    lightTheme: () => {},
})

export const ThemeProvider = themeContext.Provider

export default function useTheme() {
    return useContext(themeContext)
}