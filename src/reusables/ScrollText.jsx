import { useRef, useEffect, useState } from "react";

export const CustomScrollingText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    let scrollAmount = 0;
    const scroll = () => {
      if (textRef.current) {
        scrollAmount -= 2; // Speed
        if (scrollAmount < -textRef.current.clientWidth) {
          scrollAmount = window.innerWidth;
        }
        textRef.current.style.transform = `translateX(${scrollAmount}px)`;
      }
      requestAnimationFrame(scroll);
    };
    scroll();
  }, []);

  return (
    <div style={{ overflow: "hidden", width: "100%", whiteSpace: "nowrap" }}>
      <p ref={textRef} style={{ display: "inline-block", position: "relative" }}>
        This is a scrolling text effect in React!
      </p>
    </div>
  );
};


export const TypingText = (props) => {
    const {texts} = props;

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[currentTextIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[currentTextIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // Typing speed (adjust for faster/slower effect)
      return () => clearTimeout(timeout);
    } else {
      // After full text is displayed, wait before switching to next text
      setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000); // Time before changing text
    }
  }, [charIndex, currentTextIndex, texts]);

  return (
    <h1 style={{ fontSize: "24px", fontWeight: "bold", fontFamily: "font-mono", height:'40px' }}>
      {displayedText}
      <span style={{ opacity: charIndex % 2 ? 1 : 0 }}>|</span> {/* Blinking cursor */}
    </h1>
  );
};


