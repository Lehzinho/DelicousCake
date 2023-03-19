import React, { useState, useRef, useEffect } from "react";
import { Comment } from "../Comment";
import { Container, Dot, DotContainer, Slide, SlideWrapper } from "./styles";

export function Carousel({ slides, autoPlay = false, interval = 5000 }) {
  const count = slides.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [shouldPause, setShouldPause] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (autoPlay && !shouldPause) {
      timeoutRef.current = setTimeout(() => {
        setActiveIndex((i) => (i + 1) % count);
      }, interval);
    }
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [activeIndex, count, autoPlay, interval, shouldPause]);

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((i) => (i + 1) % count);
    }, interval);
  }, [activeIndex, count, interval]);

  const handleClick = (index) => {
    setActiveIndex(index);
    clearTimeout(timeoutRef.current);
    setShouldPause(true);
    setTimeout(() => {
      setShouldPause(false);
    }, 15000);
  };

  const handleTransitionEnd = () => {
    if (!shouldPause && autoPlay) {
      timeoutRef.current = setTimeout(() => {
        setActiveIndex((i) => (i + 1) % count);
      }, interval);
    }
  };

  return (
    <Container>
      <SlideWrapper
        count={count}
        activeIndex={activeIndex}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            style={{ zIndex: index, position: "relative", height: "100%" }}
          >
            {slide.id ? (
              <img src={slide.src} alt={slide.alt} />
            ) : (
              <Comment nome={slide.nome} comentario={slide.comentario} />
            )}
          </Slide>
        ))}
      </SlideWrapper>
      <DotContainer>
        {Array.from({ length: count }).map((_, i) => (
          <Dot
            key={i}
            active={i === activeIndex}
            onClick={() => handleClick(i)}
          />
        ))}
      </DotContainer>
    </Container>
  );
}
