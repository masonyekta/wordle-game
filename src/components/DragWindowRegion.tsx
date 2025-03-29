import React, { type ReactNode } from "react";

interface DragWindowRegionProps {
  title?: ReactNode;
}

export default function DragWindowRegion({ title }: DragWindowRegionProps) {
  return (
    <div className="flex h-8 w-screen items-stretch justify-between">
      <div className="draglayer w-full">
        {title && (
          <div className="flex flex-1 p-2 text-xs whitespace-nowrap text-gray-400 select-none">
            {title}
          </div>
        )}
      </div>
    </div>
  );
}
