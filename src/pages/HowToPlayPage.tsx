import React from "react";
import Footer from "@/components/template/Footer";

export default function HowToPlayPage() {
  return (
    <div className="flex h-full flex-col">
      <div className="mx-auto flex max-w-[480px] flex-1 flex-col gap-2 px-4">
        <h1 className="text-2xl font-bold">How to Play</h1>
        <p className="text-ms">
          The game is simple: guess the word in 6 tries. Each guess must be a
          valid 5-letter word. Hit the enter button to submit.
        </p>

        <p className="text-ms">
          After each guess, the color of the tiles will change to show how close
          your guess was to the word.
        </p>

        <div className="mt-5">
          <h2 className="text-xl font-bold">Example:</h2>
        </div>
        <div className="grid w-full grid-rows-1">
          <div className="grid grid-cols-5 gap-1">
            <div className="flex aspect-square w-full items-center justify-center rounded-md border-2 border-green-500 bg-green-500 text-2xl font-bold text-white uppercase transition-all duration-300">
              C
            </div>
            <div className="flex aspect-square w-full items-center justify-center rounded-md border-2 border-gray-300 text-2xl font-bold uppercase transition-all duration-300">
              A
            </div>
            <div className="flex aspect-square w-full items-center justify-center rounded-md border-2 border-gray-300 text-2xl font-bold uppercase transition-all duration-300">
              R
            </div>
            <div className="flex aspect-square w-full items-center justify-center rounded-md border-2 border-gray-300 text-2xl font-bold uppercase transition-all duration-300">
              T
            </div>
            <div className="flex aspect-square w-full items-center justify-center rounded-md border-2 border-gray-300 text-2xl font-bold uppercase transition-all duration-300">
              S
            </div>
          </div>
          <p className="mt-2 text-sm">
            <span className="font-bold">C</span> is in the word and is in the
            correct position
          </p>
        </div>
        <div className="mt-2 grid w-full grid-rows-1">
          <div className="grid grid-cols-5 gap-1">
            <div className="flex aspect-square w-full items-center justify-center rounded-md border-2 border-gray-300 text-2xl font-bold uppercase transition-all duration-300">
              P
            </div>
            <div className="flex aspect-square w-full items-center justify-center rounded-md border-2 border-yellow-500 bg-yellow-500 text-2xl font-bold text-white uppercase transition-all duration-300">
              A
            </div>
            <div className="flex aspect-square w-full items-center justify-center rounded-md border-2 border-gray-300 text-2xl font-bold uppercase transition-all duration-300">
              R
            </div>
            <div className="flex aspect-square w-full items-center justify-center rounded-md border-2 border-gray-300 text-2xl font-bold uppercase transition-all duration-300">
              T
            </div>
            <div className="flex aspect-square w-full items-center justify-center rounded-md border-2 border-gray-300 text-2xl font-bold uppercase transition-all duration-300">
              Y
            </div>
          </div>
          <p className="mt-2 text-sm">
            <span className="font-bold">A</span> is in the word but in the wrong
            position
          </p>
        </div>
        <div className="mt-2 grid w-full grid-rows-1">
          <div className="grid grid-cols-5 gap-1">
            <div className="flex aspect-square w-full items-center justify-center rounded-md border-2 border-gray-300 text-2xl font-bold uppercase transition-all duration-300">
              L
            </div>
            <div className="flex aspect-square w-full items-center justify-center rounded-md border-2 border-gray-300 text-2xl font-bold uppercase transition-all duration-300">
              I
            </div>
            <div className="flex aspect-square w-full items-center justify-center rounded-md border-2 border-gray-300 text-2xl font-bold uppercase transition-all duration-300">
              G
            </div>
            <div className="flex aspect-square w-full items-center justify-center rounded-md border-2 border-gray-300 text-2xl font-bold uppercase transition-all duration-300">
              H
            </div>
            <div className="flex aspect-square w-full items-center justify-center rounded-md border-2 border-gray-500 bg-gray-500 text-2xl font-bold text-white uppercase transition-all duration-300">
              T
            </div>
          </div>
          <p className="mt-2 text-sm">
            <span className="font-bold">T</span> is not in the word in any
            position.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
