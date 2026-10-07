import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/NavBar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { SunBackground } from "../components/SunBackground";
import { useAppSelector } from "../hooks";

export const Home = () => {
  const theme = useAppSelector((state) => state.theme.value);

  return (
    <div className="min-h-screen">
      {/* Theme Toggle */}

      <ThemeToggle />
      {/* Background effects */}

      {theme === "dark" ? <StarBackground /> : <SunBackground />}
      {/* NavBar */}
      <NavBar></NavBar>
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
      </main>
    </div>
  );
};
