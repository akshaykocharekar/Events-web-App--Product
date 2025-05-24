import { useState, useEffect, useMemo, useRef } from "react";
import { useTransition, a } from "@react-spring/web";
import "../Styles/Masonry.css";

function Masonry({ data }) {
  const [columns, setColumns] = useState(2);

  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia("(min-width: 1500px)").matches) setColumns(5);
      else if (window.matchMedia("(min-width: 1000px)").matches) setColumns(4);
      else if (window.matchMedia("(min-width: 600px)").matches) setColumns(3);
      else if (window.matchMedia("(min-width: 400px)").matches) setColumns(2);
      else setColumns(1); // very small mobile screens
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const ref = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) setWidth(ref.current.offsetWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [ref]);

  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0);
    let gridItems = data.map((item) => {
      const colIndex = heights.indexOf(Math.min(...heights));
      const itemWidth = width / columns;
      const itemHeight = item.width
        ? (item.height / item.width) * itemWidth
        : item.height / 2;
      const x = colIndex * itemWidth;
      const y = heights[colIndex];
      heights[colIndex] += itemHeight + 8;
      return {
        ...item,
        x,
        y,
        width: itemWidth - 8,
        height: itemHeight,
      };
    });
    return [heights, gridItems];
  }, [columns, data, width]);

  const transitions = useTransition(gridItems, {
    keys: (item) => item.id,
    from: ({ x, y, width, height }) => ({
      x,
      y,
      width,
      height,
      opacity: 0,
      scale: 0.95,
    }),
    enter: ({ x, y, width, height }) => ({
      x,
      y,
      width,
      height,
      opacity: 1,
      scale: 1,
    }),
    update: ({ x, y, width, height }) => ({
      x,
      y,
      width,
      height,
      scale: 1,
    }),
    leave: { opacity: 0, scale: 0.9 },
    config: { mass: 1, tension: 280, friction: 30 },
    trail: 25,
  });

  return (
    <div
      ref={ref}
      className="masonry"
      style={{
        position: "relative",
        height: Math.max(...heights),
        width: "100%",
        margin: "0 auto",
      }}
    >
      {transitions((style, item) => (
        <a.div
          key={item.id}
          style={{
            position: "absolute",
            top: style.y,
            left: style.x,
            width: style.width,
            height: style.height,
            opacity: style.opacity,
            scale: style.scale,
            willChange: "transform, opacity",
            padding: 4,
            boxSizing: "border-box",
          }}
          className="masonry-item"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 12,
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow:
                "0 10px 20px rgba(0,0,0,0.12), 0 6px 6px rgba(0,0,0,0.08)",
              transition: "transform 0.3s ease",
            }}
            className="masonry-image"
          />
        </a.div>
      ))}
    </div>
  );
}

export default Masonry;
