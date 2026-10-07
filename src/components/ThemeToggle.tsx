import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { cn } from "../lib/utils";
import { useAppDispatch, useAppSelector } from "../hooks";
import { changeTheme } from "../features/theme/themeSlice";

export const ThemeToggle = () => {
  const theme = useAppSelector((state) => state.theme.value);
  const themeDispatch = useAppDispatch();

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    themeDispatch(changeTheme());
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden ",
      )}
    >
      {theme === "dark" ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
