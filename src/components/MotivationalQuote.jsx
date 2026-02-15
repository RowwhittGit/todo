import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Array of motivational quotes
 */
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The future depends on what you do today. - Mahatma Gandhi",
  "Success is the sum of small efforts repeated day in and day out. - Robert Collier",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "It always seems impossible until it's done. - Nelson Mandela",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "Do not wait for the perfect moment, take the moment and make it perfect. - Unknown",
  "Your limitation—it's only your imagination.",
  "Push yourself, because no one else is going to do it for you. - Unknown",
];

/**
 * MotivationalQuote Component
 * Displays a random motivational quote
 */
const MotivationalQuote = ({ isDarkMode }) => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Set a random quote on mount
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`p-6 rounded-lg mb-8 border ${
        isDarkMode
          ? 'bg-gradient-to-r from-blue-900 to-purple-900 border-blue-700'
          : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200'
      }`}
    >
      <p
        className={`text-center text-lg italic font-medium ${
          isDarkMode ? 'text-blue-100' : 'text-blue-900'
        }`}
      >
        💡 {quote}
      </p>
    </motion.div>
  );
};

export default MotivationalQuote;
