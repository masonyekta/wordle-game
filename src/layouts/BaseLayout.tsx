import React from "react";
import DragWindowRegion from "@/components/DragWindowRegion";
import NavigationMenu from "@/components/template/NavigationMenu";
import ToggleTheme from "@/components/ToggleTheme";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DragWindowRegion />
      <div className="mx-auto flex h-12 w-full max-w-[480px] items-center justify-between px-4">
        <NavigationMenu />
        <ToggleTheme />
      </div>
      <main className="h-screen p-2 pb-20">{children}</main>
    </>
  );
}
