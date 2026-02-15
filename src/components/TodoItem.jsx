import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MoreVertical, Trash2, Edit2, CheckCircle2, Circle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTodoStore } from '../store/todoStore';

/**
 * TodoItem Component
 * Displays individual todo with completion toggle and dropdown menu
 */
const TodoItem = ({ todo, isDarkMode, onDragStart }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const { deleteTodo, toggleComplete } = useTodoStore();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      draggable
      onDragStart={onDragStart}
      className={`group ${
        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } border rounded-lg p-4 cursor-move transition-all hover:shadow-md`}
    >
      <div className="flex items-start justify-between gap-3">
        {/* Content */}
        <div className="flex items-start gap-3 flex-1 min-w-0">
          {/* Completion Toggle */}
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => toggleComplete(todo.id)}
            className={`mt-1 flex-shrink-0 transition-colors ${
              todo.completed
                ? isDarkMode
                  ? 'text-green-400'
                  : 'text-green-500'
                : isDarkMode
                ? 'text-gray-500 hover:text-gray-400'
                : 'text-gray-400 hover:text-gray-500'
            }`}
          >
            {todo.completed ? (
              <CheckCircle2 size={24} />
            ) : (
              <Circle size={24} />
            )}
          </motion.button>

          {/* Title and Description */}
          <div className="flex-1 min-w-0">
            <h3
              className={`font-semibold text-lg break-words ${
                todo.completed
                  ? isDarkMode
                    ? 'text-gray-500 line-through'
                    : 'text-gray-400 line-through'
                  : isDarkMode
                  ? 'text-white'
                  : 'text-gray-900'
              }`}
            >
              {todo.title}
            </h3>
            {todo.description && (
              <p
                className={`text-sm mt-1 break-words ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {todo.description}
              </p>
            )}
          </div>
        </div>

        {/* Dropdown Menu */}
        <div className="relative" ref={menuRef}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowMenu(!showMenu)}
            className={`p-2 rounded-lg transition-colors ${
              isDarkMode
                ? 'hover:bg-gray-700 text-gray-400'
                : 'hover:bg-gray-100 text-gray-500'
            }`}
            title="More options"
          >
            <MoreVertical size={20} />
          </motion.button>

          {/* Dropdown Content */}
          <AnimatePresence>
            {showMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className={`absolute right-0 mt-2 w-48 rounded-lg shadow-xl z-50 ${
                  isDarkMode ? 'bg-gray-700' : 'bg-white'
                } border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}
              >
                {/* Edit Option */}
                <Link to={`/edit/${todo.id}`}>
                  <motion.button
                    whileHover={{ backgroundColor: isDarkMode ? '#4b5563' : '#f3f4f6' }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                      isDarkMode ? 'text-gray-100' : 'text-gray-900'
                    }`}
                    onClick={() => setShowMenu(false)}
                  >
                    <Edit2 size={18} />
                    <span>Edit</span>
                  </motion.button>
                </Link>

                {/* Delete Option */}
                <motion.button
                  whileHover={{ backgroundColor: isDarkMode ? '#7f1d1d' : '#fee2e2' }}
                  onClick={() => {
                    deleteTodo(todo.id);
                    setShowMenu(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                    isDarkMode ? 'text-red-400' : 'text-red-600'
                  } border-t ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}
                >
                  <Trash2 size={18} />
                  <span>Delete</span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default TodoItem;
