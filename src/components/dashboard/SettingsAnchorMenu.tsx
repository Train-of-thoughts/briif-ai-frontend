"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

interface AnchorItem {
  id: string;
  label: string;
  hasUnsavedChanges?: boolean;
}

interface SettingsAnchorMenuProps {
  items: AnchorItem[];
  onItemClick: (id: string) => void;
}

export default function SettingsAnchorMenu({
  items,
  onItemClick,
}: SettingsAnchorMenuProps) {
  const t = useTranslations("common");
  const [activeItem, setActiveItem] = useState<string | null>(
    items.length > 0 ? items[0].id : null
  );

  useEffect(() => {
    const handleScroll = () => {

      for (const item of items) {
        const element = document.getElementById(item.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= 100 && bottom > 100) {
            setActiveItem(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items]);

  const handleClick = (id: string) => {
    setActiveItem(id);
    onItemClick(id);
  };

  return (
    <div className="bg-neutral-800 rounded-lg p-4 border border-neutral-700 sticky top-24">
      <h3 className="text-lg font-semibold mb-4 text-white">
        {t("settings.sections", { fallback: "Sections" })}
      </h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleClick(item.id)}
              className={`flex items-center w-full text-left px-3 py-2 rounded-md transition-all ${
                activeItem === item.id
                  ? "bg-linear-[to_right,#4c1d95_0%,#6d28d9_100%] text-white font-medium shadow-md border-l-4 border-primary-300"
                  : "text-gray-300 hover:bg-neutral-700"
              }`}
            >
              <span>{item.label}</span>
              {item.hasUnsavedChanges && (
                <span className="ml-2 w-2 h-2 rounded-full bg-red-500"></span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}