import React from "react";

type TooltipProps = {
  text: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  disabled?: boolean;
  className?: string;
};

const Tooltip = ({
  text,
  children,
  position = "top",
  disabled = false,
  className = "",
}: TooltipProps) => {
  if (disabled) {
    return <>{children}</>;
  }

  const positions = {
    top: {
      container: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      arrow:
        "top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent",
    },

    bottom: {
      container: "top-full left-1/2 -translate-x-1/2 mt-2",
      arrow:
        "bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent",
    },

    left: {
      container: "right-full top-1/2 -translate-y-1/2 mr-2",
      arrow:
        "left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent",
    },

    right: {
      container: "left-full top-1/2 -translate-y-1/2 ml-2",
      arrow:
        "right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent",
    },
  };

  return (
    <div className={`relative inline-block group ${className}`}>
      {children}

      <div
        role="tooltip" className={`absolute z-50 whitespace-nowrap rounded-md  bg-slate-900 px-3  py-2 text-xs font-medium text-white shadow-lg opacity-0 invisible pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:visible

          ${positions[position].container}
        `}
      >
        {text}

        <span
          className={`
            absolute
            h-0
            w-0
            border-[5px]
            border-slate-900

            ${positions[position].arrow}
          `}
        />
      </div>
    </div>
  );
};

export default Tooltip;