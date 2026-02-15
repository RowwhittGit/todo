import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useTodoStore } from '../store/todoStore';

/**
 * EditTodo Page
 * Form to edit existing todo items
 */
const EditTodo = ({ isDarkMode }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getTodoById, updateTodo } = useTodoStore();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load todo data
    const todo = getTodoById(Number(id));
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description || '');
      setLoading(false);
    } else {
      setError('Todo not found');
      setTimeout(() => navigate('/'), 2000);
    }
  }, [id, getTodoById, navigate]);

  /**
   * Handle form submission
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title.trim()) {
      setError('Title is required');
      return;
    }

    if (title.trim().length < 3) {
      setError('Title must be at least 3 characters');
      return;
    }

    // Update todo and navigate back
    updateTodo(Number(id), { title, description });
    navigate('/');
  };

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
          isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
        }`}
      >
        <div
          className={`text-xl font-semibold ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          Loading...
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Back Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className={`flex items-center gap-2 mb-8 px-4 py-2 rounded-lg transition-colors ${
            isDarkMode
              ? 'bg-gray-800 hover:bg-gray-700 text-white'
              : 'bg-white hover:bg-gray-100 text-gray-900'
          }`}
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </motion.button>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`${
            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          } border rounded-lg shadow-lg p-8`}
        >
          <h1
            className={`text-4xl font-bold mb-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Edit Task
          </h1>
          <p
            className={`mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Update your task details
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Field */}
            <div>
              <label
                htmlFor="title"
                className={`block text-sm font-semibold mb-2 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}
              >
                Task Title <span className="text-red-500">*</span>
              </label>
              <motion.input
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                type="text"
                id="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  setError('');
                }}
                placeholder="e.g., Complete project report"
                className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } ${error ? 'border-red-500' : ''}`}
              />
              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm mt-2"
                >
                  {error}
                </motion.p>
              )}
            </div>

            {/* Description Field */}
            <div>
              <label
                htmlFor="description"
                className={`block text-sm font-semibold mb-2 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}
              >
                Description <span className="text-gray-400">(Optional)</span>
              </label>
              <motion.textarea
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add more details about your task..."
                rows="5"
                className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
            </div>

            {/* Character Count */}
            <div
              className={`text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Description: {description.length} characters
            </div>

            {/* Submit and Cancel Buttons */}
            <div className="flex gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="flex-1 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
              >
                Save Changes
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => navigate('/')}
                className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-colors ${
                  isDarkMode
                    ? 'bg-gray-700 hover:bg-gray-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                }`}
              >
                Cancel
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EditTodo;
