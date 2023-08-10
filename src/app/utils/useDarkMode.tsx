import { useEffect, useState } from "react";

function useDarkMode() {
  const [theme, setTheme] = useState<string>(
    typeof window !== "undefined" ? localStorage.theme : "dark"
  );
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    console.log("theme clicked")
    const root = window.document.documentElement;

    document.body.classList.remove(colorTheme);
    document.body.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);



  return [colorTheme, setTheme] as const;
}

export default useDarkMode;