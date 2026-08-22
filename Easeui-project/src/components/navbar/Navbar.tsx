import { Slot } from "@radix-ui/react-slot";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";
import { hoverAnimations } from "@/libs/animations/hoverAnimation";
import gsap from "gsap";
import { Button } from "../Button";
import { Search, Bell, Menu, X } from "lucide-react";

const navbarVariants = cva(
  `w-full flex items-center justify-between px-6 rounded-md border border-gray-200 transition-all`,
  {
    variants: {
      variant: {
        dark: "bg-slate-900 text-white border-slate-800",
        light: "bg-white text-gray-800 shadow-sm",
        primary: "bg-indigo-600 text-white border-indigo-600",
        glass:
          "backdrop-blur-md bg-white/10 text-white border border-white/20",
      },
      size: {
        default: "h-16",
        sm: "h-12",
        lg: "h-20",
        xl: "h-24",
      },
    },
    defaultVariants: {
      variant: "light",
      size: "default",
    },
  }
);

interface NavbarProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof navbarVariants> {
  asChild?: boolean;
  animation?: keyof typeof entranceAnimations;
  hoverAnimation?: keyof typeof hoverAnimations;
}

const Navbar = forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      animation = "fadeIn",
      hoverAnimation = "none",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "nav";

    const navbarRef = useRef<HTMLElement | null>(null);

    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
      if (!navbarRef.current || animation === "none") return;

      entranceAnimations[animation]?.(navbarRef.current);
    }, [animation]);

    const handleMouseEnter = () => {
      if (!navbarRef.current) return;

      hoverAnimations[hoverAnimation]?.(navbarRef.current);
    };

    const handleMouseLeave = () => {
      if (!navbarRef.current) return;

      gsap.to(navbarRef.current, {
        scale: 1,
        rotation: 0,
        y: 0,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const isDark =
      variant === "dark" ||
      variant === "primary" ||
      variant === "glass";

    return (
      <Comp
        ref={(node) => {
          navbarRef.current = node as HTMLElement;

          if (typeof ref === "function") {
            ref(node as HTMLElement);
          } else if (ref) {
            (
              ref as React.MutableRefObject<HTMLElement | null>
            ).current = node;
          }
        }}
        className={cn(
          navbarVariants({
            variant,
            size,
          }),
          className
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold",
              isDark
                ? "bg-white text-slate-900"
                : "bg-indigo-600 text-white"
            )}
          >
            E
          </div>

          <div className="hidden sm:block">
            <h1 className="text-lg font-bold tracking-tight">
              EaseUI
            </h1>
            <p
              className={cn(
                "text-[10px]",
                isDark
                  ? "text-white/60"
                  : "text-slate-400"
              )}
            >
              Component Library
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-1 md:flex">
          {["Home", "About", "Customers", "Contact"].map(
            (item, index) => (
              <a
                key={item}
                href="#"
                className={cn(
                  "relative rounded-md px-4 py-2 text-sm font-medium transition-all duration-200",
                  isDark
                    ? "text-white/80 hover:bg-white/10 hover:text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-indigo-600",
                  index === 0 &&
                    (isDark
                      ? "bg-white/10 text-white"
                      : "bg-indigo-50 text-indigo-600")
                )}
              >
                {item}
              </a>
            )
          )}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-md transition-all duration-200",
              isDark
                ? "text-white/70 hover:bg-white/10 hover:text-white"
                : "text-slate-500 hover:bg-slate-100 hover:text-indigo-600"
            )}
          >
            <Search size={18} />
          </button>

          <button
            type="button"
            className={cn(
              "relative flex h-9 w-9 items-center justify-center rounded-md transition-all duration-200",
              isDark
                ? "text-white/70 hover:bg-white/10 hover:text-white"
                : "text-slate-500 hover:bg-slate-100 hover:text-indigo-600"
            )}
          >
            <Bell size={18} />

            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
          </button>

          <Button
            size="sm"
            hoverAnimation="none"
            variant={isDark ? "ghost" : "primary"}
          >
            Profile
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-md md:hidden",
            isDark
              ? "hover:bg-white/10"
              : "hover:bg-slate-100"
          )}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {mobileOpen && (
          <div
            className={cn(
              "absolute left-0 right-0 top-full z-50 mt-2 rounded-lg border p-3 shadow-lg md:hidden",
              isDark
                ? "border-slate-700 bg-slate-900"
                : "border-slate-200 bg-white"
            )}
          >
            <div className="flex flex-col gap-1">
              {["Home", "About", "Customers", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-md px-4 py-3 text-sm font-medium transition-colors",
                      isDark
                        ? "text-white/80 hover:bg-white/10 hover:text-white"
                        : "text-slate-600 hover:bg-slate-100 hover:text-indigo-600"
                    )}
                  >
                    {item}
                  </a>
                )
              )}

              <div className="mt-2 border-t pt-3">
                <Button
                  className="w-full"
                  hoverAnimation="none"
                >
                  Profile
                </Button>
              </div>
            </div>
          </div>
        )}
      </Comp>
    );
  }
);

Navbar.displayName = "Navbar";

export { Navbar, navbarVariants };