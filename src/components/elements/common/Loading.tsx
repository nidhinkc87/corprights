import { cn } from "@/lib/utils";

export default function Loading({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "inline-block h-4 w-4 rounded-full ",
        "border-2 border-solid border-current border-r-transparent align-[-0.125em] ",
        "animate-spin motion-reduce:animate-[spin_13s_linear_infinite]",
        className
      )}
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
}
