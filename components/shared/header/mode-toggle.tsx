"use client";

import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@radix-ui/react-dropdown-menu";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, SunMoon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Button variant="ghost" disabled />;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          {theme === "dark" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <button onClick={() => setTheme("light")}>Light Mode</button>
        <button onClick={() => setTheme("dark")}>Dark Mode</button>
        <button onClick={() => setTheme("system")}>System Mode</button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeToggle;
