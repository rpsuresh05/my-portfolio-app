import { useEffect, useRef, useState } from "react";
// import { FiLock } from "react-icons/fi";
import { motion } from "framer-motion";

const Example = () => {
  return (
    <EncryptButton />
    // <div className="grid min-h-[200px] place-content-center bg-neutral-900 p-4">

    // </div>
  );
};

const TARGET_TEXT = "Suresh R Paranthaman";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const CHARS = "!@#$%^&*():{};|,.<>/?";

const EncryptButton = () => {
  const intervalRef = useRef(null);

  const [text, setText] = useState(TARGET_TEXT);

  useEffect(() => {
    let pos = 0;
    let newInterval = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;
      console.log("scrambled---", scrambled, pos);
      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        console.log(
          "stop---",
          scrambled,
          pos,
          TARGET_TEXT.length * CYCLES_PER_LETTER
        );
        clearInterval(newInterval);
      }
    }, 100);
  }, []);

  const scramble = () => {
    // alert("HI..");
    console.log("Testing..");
    let pos = 0;

    intervalRef.current = setInterval(() => {
      console.log("Testing.1.");
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          console.log("Testing..2");
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");
      console.log("scrambled", scrambled, pos);

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        console.log(
          "stop",
          scrambled,
          pos,
          TARGET_TEXT.length * CYCLES_PER_LETTER
        );
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText(TARGET_TEXT);
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="group relative overflow-hidden rounded-lg border-[1px] border-neutral-500 bg-neutral-700 px-4 py-2 font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-indigo-300"
    >
      <div className="relative z-10 flex items-center gap-2">
        {/* <FiLock /> */}
        <span>{text}</span>
      </div>
      {/* <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      /> */}
    </motion.div>
  );
};

export default Example;
