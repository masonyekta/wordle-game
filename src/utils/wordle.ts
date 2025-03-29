/**
 * Submit the guess to the server and return the result
 * @param guess
 * @returns
 */
export const submitGuess = async (guess: string) => {
  try {
    const response = await fetch("https://wordle-api-swart.vercel.app/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ guess }),
    });

    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Failed to submit guess:", error);
    return "";
  }
};

/**
 * Calculate which keys should be colored on the keyboard
 * @param guesses
 * @param currentRow
 * @param guessResults
 * @returns
 */
export const getKeyStatus = (
  guesses: string[],
  currentRow: number,
  guessResults: string[],
) => {
  const keyStatus: Record<string, string> = {};

  // Process all submitted guesses
  for (let i = 0; i < currentRow; i++) {
    const guess = guesses[i];
    const result = guessResults[i];

    for (let j = 0; j < guess.length; j++) {
      const letter = guess[j];

      if (result[j] === "+") {
        keyStatus[letter] = "correct";
      } else if (result[j] === "x") {
        keyStatus[letter] =
          keyStatus[letter] !== "correct" ? "present" : "correct";
      } else if (result[j] === "-") {
        keyStatus[letter] = keyStatus[letter] || "absent";
      }
    }
  }

  return keyStatus;
};

/**
 * Update the current row with the current guess
 * @param guesses
 * @param currentRow
 * @param currentGuess
 */
export const getDisplayGuesses = (
  guesses: string[],
  currentRow: number,
  currentGuess: string,
): string[] => {
  return guesses.map((guess, index) => {
    if (index === currentRow) {
      return currentGuess.padEnd(5, " ");
    }
    return guess;
  });
};

/**
 * Handle key press events for the game
 * @param key
 * @param currentGuess
 * @param setCurrentGuess
 * @param guesses
 * @param setGuesses
 * @param currentRow
 * @param setCurrentRow
 * @param guessResults
 * @param setGuessResults
 * @param setGameOver
 * @param setGameWon
 * @param setShowDialog
 * @param gameOver
 * @returns
 */
export const handleKeyPress = async (
  key: string,
  currentGuess: string,
  setCurrentGuess: React.Dispatch<React.SetStateAction<string>>,
  guesses: string[],
  setGuesses: React.Dispatch<React.SetStateAction<string[]>>,
  currentRow: number,
  setCurrentRow: React.Dispatch<React.SetStateAction<number>>,
  guessResults: string[],
  setGuessResults: React.Dispatch<React.SetStateAction<string[]>>,
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>,
  setGameWon: React.Dispatch<React.SetStateAction<boolean>>,
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>,
  gameOver: boolean,
) => {
  if (gameOver) return;

  if (key === "ENTER") {
    if (currentGuess.length !== 5) {
      return;
    }

    // Submit guess
    const result = await submitGuess(currentGuess);

    const newGuesses = [...guesses];
    newGuesses[currentRow] = currentGuess;
    setGuesses(newGuesses);

    const newGuessResults = [...guessResults];
    newGuessResults[currentRow] = result;
    setGuessResults(newGuessResults);

    // Check if game is won
    if (result === "+++++") {
      setGameWon(true);
      setGameOver(true);
      setShowDialog(true);
      return;
    }

    // Move to next row or end game
    if (currentRow === 5) {
      setGameOver(true);
      setShowDialog(true);
    } else {
      setCurrentRow(currentRow + 1);
      setCurrentGuess("");
    }
  } else if (key === "BACKSPACE") {
    setCurrentGuess(currentGuess.slice(0, -1));
  } else if (/^[A-Z]$/.test(key) && currentGuess.length < 5) {
    setCurrentGuess(currentGuess + key);
  }
};

/**
 * Get the status of each letter in the current guess
 * @param letter
 * @param rowIndex
 * @param colIndex
 * @returns
 */
export const getLetterStatus = (
  letter: string,
  rowIndex: number,
  colIndex: number,
  currentRow: number,
  guessResults: string[],
) => {
  // Always use guessResults to determine letter status
  if (guessResults[rowIndex]) {
    const result = guessResults[rowIndex][colIndex];
    switch (result) {
      case "+": // Correct letter in correct position
        return "bg-green-500 text-white border-green-500";
      case "x": // Letter exists but in wrong position
        return "bg-yellow-500 text-white border-yellow-500";
      case "-": // Letter does not exist in the word
        return "bg-gray-500 text-white border-gray-500";
      default:
        return "";
    }
  }

  // Fallback status if no results
  return "";
};
