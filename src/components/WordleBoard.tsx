import React from "react";
import { getLetterStatus } from "@/utils/wordle";

interface WordleBoardProps {
  guesses: string[];
  currentRow: number;
  guessResults?: string[];
}

export default function WordleBoard({
  guesses,
  currentRow,
  guessResults = [],
}: WordleBoardProps) {
  return (
    <div className="grid w-full grid-rows-6 gap-1">
      {guesses.map((guess, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-5 gap-1">
          {Array.from({ length: 5 }).map((_, colIndex) => {
            const letter = guess[colIndex] || " ";
            const status = getLetterStatus(
              letter,
              rowIndex,
              colIndex,
              currentRow,
              guessResults,
            );
            return (
              <div
                key={colIndex}
                className={`flex aspect-square w-full items-center justify-center border-2 text-2xl font-bold uppercase transition-all duration-300 ${
                  status || "border-gray-300"
                }`}
              >
                {letter !== " " ? letter : ""}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
