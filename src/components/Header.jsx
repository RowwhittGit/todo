import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Header Component
 * Displays navigation, add button, and dark mode toggle
 */
const Header = ({ isDarkMode, onToggleDarkMode }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${
        isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
      } border-b shadow-lg transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Title */}
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`text-2xl font-bold ${
              isDarkMode ? 'text-blue-400' : 'text-blue-600'
            }`}
          >
            ✓ Todo App
          </motion.div>
        </Link>

        {/* Right side: Add button and Dark mode toggle */}
        <div className="flex items-center gap-4">
          {/* Add Todo Button */}
          <Link to="/add">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                isDarkMode
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              <Plus size={20} />
              <span>Add Task</span>
            </motion.button>
          </Link>

          {/* Dark Mode Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onToggleDarkMode}
            className={`p-2 rounded-lg transition-all ${
              isDarkMode
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
