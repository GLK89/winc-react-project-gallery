import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useTheme } from "next-themes";

export function ColorModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const current = theme ?? resolvedTheme;

  const isActive = (mode) => {
    return current === mode;
  };

  return (
    <ButtonGroup isAttached size="sm" aria-label="Theme toggle">
      <Button
        onClick={() => setTheme("light")}
        variant={isActive("light") ? "solid" : "ghost"}
      >
        Light
      </Button>

      <Button
        onClick={() => setTheme("dark")}
        variant={isActive("dark") ? "solid" : "ghost"}
      >
        Dark
      </Button>

      <Button
        onClick={() => setTheme("system")}
        variant={isActive("system") ? "solid" : "ghost"}
      >
        System
      </Button>
    </ButtonGroup>
  );
}
