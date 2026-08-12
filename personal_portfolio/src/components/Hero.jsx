import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useEffect } from "react";

const Hero = () => {
  const heroRef = useRef(null);

  const smoothScrollTo = (id) => {
  const section = document.getElementById(id);

  if (!section) return;

  const navbarHeight = 90;

  const targetPosition =
    section.getBoundingClientRect().top +
    window.scrollY -
    navbarHeight;

  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;

  const duration = 1000;
  let startTime = null;

  const easeInOut = (t) => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const animation = (currentTime) => {
    if (!startTime) startTime = currentTime;

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const easedProgress = easeInOut(progress);

    window.scrollTo(
      0,
      startPosition + distance * easedProgress
    );

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};
useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".hero-badge", {
        opacity: 0,
        y: 20,
        duration: 0.6,
      })
        .from(
          ".hero-title-line",
          {
            opacity: 0,
            y: 70,
            duration: 0.8,
            stagger: 0.12,
          },
          "-=0.2"
        )
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
          },
          "-=0.35"
        )
        .from(
          ".hero-buttons",
          {
            opacity: 0,
            y: 25,
            duration: 0.6,
          },
          "-=0.35"
        )
        .from(
          ".hero-scroll",
          {
            opacity: 0,
            duration: 0.5,
          },
          "-=0.2"
        )
        .from(
          ".hero-card",
          {
            opacity: 0,
            scale: 0.7,
            rotateY: 25,
            rotateZ: -15,
            duration: 1.2,
            ease: "back.out(1.4)",
          },
          "-=1"
        )
        .from(
          ".hero-orbit",
          {
            opacity: 0,
            scale: 0.5,
            duration: 1,
          },
          "-=0.8"
        )
        .from(
          ".hero-floating",
          {
            opacity: 0,
            scale: 0,
            duration: 0.5,
            stagger: 0.15,
            ease: "back.out(2)",
          },
          "-=0.5"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

useEffect(() => {
  const ctx = gsap.context(() => {
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        ".hero-reveal",
        { 
          clipPath: "inset(50% 50% 50% 50% round 30px)",
        },
        {
              clipPath: "inset(0% 0% 0% 0% round 0px)",
          duration: 1.4,
          ease: "power4.inOut",
        }
      )
      .from(
        ".hero-content",
        {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );
  }, heroRef);

  return () => ctx.revert();
}, []);


return (
    <section
  ref={heroRef}
  id="home"
  className="hero-reveal scroll-mt-24 relative flex min-h-screen items-center overflow-hidden px-6 pt-28 lg:px-8"
>

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

    <div className="hero-content relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">        <div>
          <p className="hero-badge mb-5 text-sm uppercase tracking-[0.3em] text-white/50">
            Frontend Developer
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            <span className="hero-title-line block">
              I BUILD
            </span>

            <span className="hero-title-line block text-white/40">
              DIGITAL
            </span>

            <span className="hero-title-line block">
              EXPERIENCES.
            </span>
          </h1>

          <p className="hero-description mt-8 max-w-lg text-base leading-7 text-white/55 sm:text-lg">
            I create modern, interactive and user-focused web experiences
            using React, JavaScript, GSAP and the MERN stack.
          </p>

          <div className="hero-buttons mt-10 flex flex-wrap items-center gap-4">

            <button
  type="button"
  onClick={() => smoothScrollTo("projects")}
  className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:scale-105"
>
  View My Work

  <ArrowUpRight
    size={17}
    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
  />
</button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/80 transition duration-300 hover:border-white/40 hover:text-white"
            >
              Download Resume
            </a>
          </div>
<button
  type="button"
  onClick={() => smoothScrollTo("footer")}
  className="hero-scroll mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/30 transition-colors duration-300 hover:text-white"
>
  <ArrowDown
    size={15}
    className="animate-bounce"
  />

  Scroll to explore
</button>
        </div>

        <div className="relative mx-auto flex h-[400px] w-full max-w-[500px] items-center justify-center lg:h-[600px]">

          <div className="hero-orbit absolute h-[320px] w-[320px] rounded-full border border-white/5 sm:h-[420px] sm:w-[420px]" />

          <div className="hero-orbit absolute h-[240px] w-[240px] rounded-full border border-dashed border-white/10 sm:h-[320px] sm:w-[320px]" />

          <div
            className="hero-card relative h-[280px] w-[220px] rounded-3xl border border-white/15 bg-white/5 p-5 shadow-2xl backdrop-blur-xl sm:h-[320px] sm:w-[260px]"
            style={{
              transformStyle: "preserve-3d",
            }}
          >

            <div className="absolute -inset-8 -z-10 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            </div>

            <div className="mt-10 space-y-4 font-mono text-xs text-white/50 sm:text-sm">
              <p>
                <span className="text-violet-400">const</span>{" "}
                developer =
              </p>

              <p className="pl-4 text-white/80">
                &#123;
              </p>

              <p className="pl-8">
                name:{" "}
                <span className="text-green-400">
                  "Rohit"
                </span>
              </p>

              <p className="pl-8">
                role:{" "}
                <span className="text-green-400">
                  "Developer"
                </span>
              </p>

              <p className="pl-8">
                stack:{" "}
                <span className="text-green-400">
                  "MERN"
                </span>
              </p>

              <p className="pl-4 text-white/80">
                &#125;;
              </p>

              <p className="pt-5 text-violet-400">
                &lt;Build /&gt;
              </p>
            </div>

            <div className="hero-floating absolute -right-12 top-20 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-xs text-white/60 backdrop-blur-md">
              React
            </div>

            <div className="hero-floating absolute -left-12 bottom-20 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-xs text-white/60 backdrop-blur-md">
              GSAP
            </div>
          </div>

          <div className="hero-floating absolute right-12 top-16 h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_30px_rgba(167,139,250,0.8)]" />

          <div className="hero-floating absolute bottom-16 left-14 h-2 w-2 rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;