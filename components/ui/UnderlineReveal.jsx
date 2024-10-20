import { motion } from "framer-motion";
import React from "react";
import "./UnderlineReveal.css"; // Import CSS for extra styling if needed

const UnderlineReveal = () => {
  return (
    <div className="container">
      <motion.h1
        className="name"
        initial={{ y: -5 }}
        whileHover={{ y: -10 }} // Optional slight lift on hover
      >
        Suresh R P
      </motion.h1>
      <motion.div
        className="underline"
        initial={{ width: "50%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </div>
  );
};

export default UnderlineReveal;
