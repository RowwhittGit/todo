import React from 'react';
import { motion } from 'framer-motion';
import { useTodoStore } from '../store/todoStore';
import TodoContainer from '../components/TodoContainer';
import MotivationalQuote from '../components/MotivationalQuote';

/**
 * Home Page
 * Displays pending and completed tasks with drag-drop functionality
 */
const Home = ({ isDarkMode }) => {
  const {
    getPendingTodos,
    getCompletedTodos,
    updateTodo,
    clearCompleted,
  } = useTodoStore();

  const pendingTodos = getPendingTodos();
  const completedTodos = getCompletedTodos();

  /**
   * Handle drag over event
   */
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  /**
   * Handle drop event for pending tasks
   */
  const handleDropPending = (e) => {
    e.preventDefault();
    try {
      const todo = JSON.parse(e.dataTransfer.getData('application/json'));
      if (todo.completed) {
        updateTodo(todo.id, { completed: false });
      }
    } catch (error) {
      console.error('Drop error:', error);
    }
  };

  /**
   * Handle drop event for completed tasks
   */
  const handleDropCompleted = (e) => {
    e.preventDefault();
    try {
      const todo = JSON.parse(e.dataTransfer.getData('application/json'));
      if (!todo.completed) {
        updateTodo(todo.id, { completed: true });
      }
    } catch (error) {
      console.error('Drop error:', error);
    }
  };

  /**
   * Handle clearing all completed tasks
   */
  const handleClearAllCompleted = () => {
    if (window.confirm('Are you sure you want to delete all completed tasks?')) {
      clearCompleted();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1
            className={`text-4xl md:text-5xl font-bold mb-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Welcome to Your Todo App ✓
          </h1>
          <p
            className={`text-lg ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Stay organized and productive with ease
          </p>
        </motion.div>

        {/* Motivational Quote */}
        <MotivationalQuote isDarkMode={isDarkMode} />

        {/* Main Content - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pending Tasks */}
          <TodoContainer
            title="Pending Tasks"
            todos={pendingTodos}
            isDarkMode={isDarkMode}
            onDragOver={handleDragOver}
            onDrop={handleDropPending}
            onClearAll={() => {
              if (
                window.confirm('Delete all pending tasks? This cannot be undone.')
              ) {
                pendingTodos.forEach((todo) =>
                  useTodoStore.getState().deleteTodo(todo.id)
                );
              }
            }}
          />

          {/* Completed Tasks */}
          <TodoContainer
            title="Completed Tasks"
            todos={completedTodos}
            isDarkMode={isDarkMode}
            onDragOver={handleDragOver}
            onDrop={handleDropCompleted}
            onClearAll={handleClearAllCompleted}
          />
        </div>

        {/* Empty State */}
        {pendingTodos.length === 0 && completedTodos.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`text-center py-20 rounded-lg ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <p
              className={`text-2xl font-bold mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              🚀 Get Started!
            </p>
            <p
              className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
            >
              Click "Add Task" to create your first todo
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Home;
