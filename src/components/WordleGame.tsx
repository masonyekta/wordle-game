import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import WordleBoard from "@/components/WordleBoard";
import WordleKeyboard from "@/components/WordleKeyboard";
import {
  getKeyStatus,
  getDisplayGuesses,
  handleKeyPress as handleKeyPressUtil,
} from "@/utils/wordle";

export default function WordleGame() {
  const [guesses, setGuesses] = useState<string[]>(Array(6).fill(""));
  const [currentGuess, setCurrentGuess] = useState("");
  const [currentRow, setCurrentRow] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [guessResults, setGuessResults] = useState<string[]>([]);

  const startNewGame = () => {
    setGuesses(Array(6).fill(""));
    setCurrentGuess("");
    setCurrentRow(0);
    setGameOver(false);
    setGameWon(false);
    setShowDialog(false);
    setGuessResults([]);
  };

  const handleKeyPress = (key: string) => {
    handleKeyPressUtil(
      key,
      currentGuess,
      setCurrentGuess,
      guesses,
      setGuesses,
      currentRow,
      setCurrentRow,
      guessResults,
      setGuessResults,
      setGameOver,
      setGameWon,
      setShowDialog,
      gameOver,
    );
  };

  // Update the current row with the current guess
  const displayGuesses = getDisplayGuesses(guesses, currentRow, currentGuess);

  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center gap-6">
      <WordleBoard
        guesses={displayGuesses}
        currentRow={currentRow}
        guessResults={guessResults}
      />

      <WordleKeyboard
        onKeyPress={handleKeyPress}
        keyStatus={getKeyStatus(guesses, currentRow, guessResults)}
      />

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {gameWon ? "Congratulations!" : "Game Over"}
            </DialogTitle>
            <DialogDescription>
              {gameWon
                ? `You guessed the word in ${currentRow} ${currentRow === 1 ? "try" : "tries"}!`
                : `Game over! Try again.`}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={startNewGame}>Play Again</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
