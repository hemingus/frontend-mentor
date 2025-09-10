import { useEffect } from "react"
import { useLocalStorage } from "./useLocalStorage"

export function useTheme() {
    const [theme, setTheme] = useLocalStorage<string>({key: "theme", defaultValue: "light"});

    useEffect(() => {
        if (!theme || (theme !== "light" && theme !== "dark")) {
            const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefersDark ? "dark" : "light");
        }
    }, [theme, setTheme])

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return { theme, toggleTheme };
}