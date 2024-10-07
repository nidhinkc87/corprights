import { cn } from "@/lib/utils";

interface HighlightTitleProps {
  title: string;
  highlightText?: string;
  className?: string;
  highlightTextClassName?: string;
}

function HighlightTitle({
  title,
  highlightText,
  highlightTextClassName,
  className,
}: HighlightTitleProps) {
  if (!highlightText) {
    return <span className={className}>{title}</span>;
  }
  const index = title.indexOf(highlightText);

  if (index === -1) {
    return <span className={className}>{title}</span>;
  }

  const beforeHighlight = title.substring(0, index).trim();
  const afterHighlight = title.substring(index + highlightText.length).trim();

  return (
    <span className={cn("", className)}>
      {beforeHighlight}{" "}
      <span
        className={cn(
          "text-transparent bg-clip-text bg-primary-gradient",
          highlightTextClassName
        )}
      >
        {highlightText}
      </span>{" "}
      {afterHighlight}
    </span>
  );
}

export default HighlightTitle;
