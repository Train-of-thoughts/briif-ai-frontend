"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

interface AccordionProps {
  title: string;
  id: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
  onToggle?: (isOpen: boolean) => void;
}

export default function Accordion({
  title,
  id,
  defaultOpen = true,
  children,
  onToggle,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | undefined>(
    defaultOpen ? undefined : 0
  );

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  const toggleAccordion = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    if (onToggle) {
      onToggle(newIsOpen);
    }
  };

  return (
    <div id={id} className="border border-neutral-700 rounded-lg mb-4">
      <button
        className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls={`content-${id}`}
      >
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <ChevronUpIcon
          className={`h-5 w-5 text-gray-300 transition-transform duration-300 ${
            isOpen ? "" : "transform rotate-180"
          }`}
        />
      </button>
      <div
        id={`content-${id}`}
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: contentHeight }}
        aria-hidden={!isOpen}
      >
        <div className="p-4 border-t border-neutral-700">{children}</div>
      </div>
    </div>
  );
}