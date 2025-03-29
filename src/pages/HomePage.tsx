import React from "react";
import WordleGame from "@/components/WordleGame";

export default function HomePage() {
  return (
    <div className="flex h-full flex-col">
      <WordleGame />
    </div>
  );
}
