import { useTranslations } from "next-intl";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

interface UnderDevelopmentProps {
  title?: string;
  message?: string;
}

export default function UnderDevelopment({
  title,
  message,
}: UnderDevelopmentProps) {
  const t = useTranslations("common");

  const defaultTitle = t("underDevelopment.title", {
    fallback: "Feature Under Development",
  });
  const defaultMessage = t("underDevelopment.message", {
    fallback:
      "We're working hard to bring this feature to you. Please check back soon!",
  });

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center min-h-[400px]">
      <div className="bg-neutral-800 p-8 rounded-xl border border-neutral-700 shadow-lg max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-primary-700 p-4 rounded-full">
            <WrenchScrewdriverIcon className="h-10 w-10 text-white" />
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-white">
          {title || defaultTitle}
        </h2>
        <p className="text-gray-300 mb-6">{message || defaultMessage}</p>
        <div className="w-full bg-neutral-700 h-2 rounded-full overflow-hidden">
          <div className="bg-primary-400 h-full w-2/3 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}