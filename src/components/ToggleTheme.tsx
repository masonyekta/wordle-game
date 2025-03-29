import { Moon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { toggleTheme } from "@/helpers/theme_helpers";

export default function ToggleTheme() {
  return (
    <Button onClick={toggleTheme} size="icon" variant={"secondary"}>
      <Moon size={16} />
    </Button>
  );
}
