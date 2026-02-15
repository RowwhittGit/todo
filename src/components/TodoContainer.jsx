import React from 'react';
import { motion } from 'framer-motion';
import TodoItem from './TodoItem';

/**
 * TodoContainer Component
 * Container for displaying todos with drag-drop support
 */
const TodoContainer = ({
  title,
  todos,
  isDarkMode,
  onDragOver,
  onDrop,
  onClearAll,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex-1 min-w-[300px]"
    >
      {/* Container Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2
            className={`text-2xl font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {title}
          </h2>
          <p
            className={`text-sm mt-1 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {todos.length} {todos.length === 1 ? 'task' : 'tasks'}
          </p>
        </div>

        {/* Clear All Button */}
        {todos.length > 0 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClearAll}
            className={`text-sm px-3 py-1 rounded transition-colors ${
              isDarkMode
                ? 'bg-red-900 hover:bg-red-800 text-red-200'
                : 'bg-red-100 hover:bg-red-200 text-red-700'
            }`}
          >
            Clear All
          </motion.button>
        )}
      </div>

      {/* Droppable Area */}
      <motion.div
        onDragOver={onDragOver}
        onDrop={onDrop}
        className={`min-h-[400px] p-4 rounded-lg border-2 border-dashed transition-all ${
          isDarkMode
            ? 'bg-gray-800 border-gray-700 hover:border-gray-600'
            : 'bg-gray-50 border-gray-300 hover:border-gray-400'
        }`}
      >
        {todos.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p
              className={`text-center ${
                isDarkMode ? 'text-gray-500' : 'text-gray-400'
              }`}
            >
              {title === 'Pending Tasks'
                ? '✨ No pending tasks! You\'re all caught up.'
                : '🎉 Great work! No completed tasks yet.'}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                isDarkMode={isDarkMode}
                onDragStart={(e) => {
                  e.dataTransfer.effectAllowed = 'move';
                  e.dataTransfer.setData('application/json', JSON.stringify(todo));
                }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default TodoContainer;
