import React from "react";

import { Button } from "@/components/ui/button";

interface WordleKeyboardProps {
  onKeyPress: (key: string) => void;
  keyStatus: Record<string, string>;
}

export default function WordleKeyboard({
  onKeyPress,
  keyStatus,
}: WordleKeyboardProps) {
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"],
  ];

  // Function to determine button style based on key status
  const getKeyStyle = (key: string) => {
    if (!keyStatus[key])
      return "bg-gray-200 hover:bg-gray-300 dark:text-gray-900";

    switch (keyStatus[key]) {
      case "correct":
        return "bg-green-500 text-white hover:bg-green-600";
      case "present":
        return "bg-yellow-500 text-white hover:bg-yellow-600";
      case "absent":
        return "bg-gray-500 text-white hover:bg-gray-600";
      default:
        return "bg-gray-200 hover:bg-gray-300";
    }
  };

  return (
    <div className="w-full">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="mb-1 flex justify-center gap-1">
          {row.map((key) => (
            <Button
              key={key}
              onClick={() => onKeyPress(key)}
              className={`${getKeyStyle(key)} ${
                key === "ENTER" || key === "BACKSPACE"
                  ? "px-2 text-xs"
                  : "px-3 text-sm"
              } h-12 font-medium`}
              variant="outline"
            >
              {key === "BACKSPACE" ? "⌫" : key}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
}
