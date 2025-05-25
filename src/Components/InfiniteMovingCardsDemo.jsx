import React, { useEffect, useState, useRef } from "react";

export default function InfiniteMovingCardsDemo() {
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness...",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote: "To be, or not to be, that is the question...",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote: "Call me Ishmael. Some years ago—never mind how long precisely...",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];

  return (
    <div className="h-[14rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
}) {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    // Duplicate items for infinite scroll effect
    const scrollerChildren = Array.from(scrollerRef.current.children);
    scrollerChildren.forEach((child) => {
      const clone = child.cloneNode(true);
      scrollerRef.current.appendChild(clone);
    });

    // Set CSS custom properties for animation direction
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );

    // Set CSS custom properties for animation speed
    let duration;
    if (speed === "fast") duration = "20s";
    else if (speed === "normal") duration = "40s";
    else duration = "80s";
    containerRef.current.style.setProperty("--animation-duration", duration);

    setStart(true);
  }, [direction, speed]);

  return (
    <>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50%));
          }
        }
        .animate-scroll {
          animation-name: scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-direction: var(--animation-direction);
          animation-duration: var(--animation-duration);
        }
      `}</style>

      <div
        ref={containerRef}
        className="relative max-w-7xl overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
        }}
      >
        <ul
          ref={scrollerRef}
          className={`flex w-max min-w-full flex-nowrap gap-4 py-4 ${
            start ? "animate-scroll" : ""
          } ${pauseOnHover ? "hover:animation-play-state-paused" : ""}`}
        >
          {items.map((item, idx) => (
            <li
              key={idx}
              className="relative w-[350px] max-w-full flex-shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-gradient-to-b from-gray-50 to-gray-100 px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-gradient-to-b dark:from-zinc-900 dark:to-zinc-800"
            >
              <blockquote>
                <span className="block text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                  {item.quote}
                </span>
                <div className="mt-6 flex flex-row items-center">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                      {item.title}
                    </span>
                  </div>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
