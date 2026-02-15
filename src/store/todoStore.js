import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Zustand store for managing todos with localStorage persistence
 * Uses the persist middleware to automatically sync state with localStorage
 */
export const useTodoStore = create(
  persist(
    (set, get) => ({
      todos: [],

      /**
       * Add a new todo item
       * @param {string} title - Task title
       * @param {string} description - Task description
       */
      addTodo: (title, description = '') => {
        const newTodo = {
          id: Date.now(),
          title,
          description,
          completed: false,
          createdAt: new Date().toISOString(),
        };
        set((state) => ({
          todos: [...state.todos, newTodo],
        }));
        return newTodo.id;
      },

      /**
       * Update an existing todo
       * @param {number} id - Todo ID
       * @param {object} updates - Object containing fields to update
       */
      updateTodo: (id, updates) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, ...updates } : todo
          ),
        }));
      },

      /**
       * Delete a todo by ID
       * @param {number} id - Todo ID
       */
      deleteTodo: (id) => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        }));
      },

      /**
       * Toggle todo completion status
       * @param {number} id - Todo ID
       */
      toggleComplete: (id) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        }));
      },

      /**
       * Get a single todo by ID
       * @param {number} id - Todo ID
       */
      getTodoById: (id) => {
        return get().todos.find((todo) => todo.id === id);
      },

      /**
       * Get all pending todos
       */
      getPendingTodos: () => {
        return get().todos.filter((todo) => !todo.completed);
      },

      /**
       * Get all completed todos
       */
      getCompletedTodos: () => {
        return get().todos.filter((todo) => todo.completed);
      },

      /**
       * Search todos by title
       * @param {string} query - Search query
       */
      searchTodos: (query) => {
        const lowerQuery = query.toLowerCase();
        return get().todos.filter((todo) =>
          todo.title.toLowerCase().includes(lowerQuery)
        );
      },

      /**
       * Clear all completed todos
       */
      clearCompleted: () => {
        set((state) => ({
          todos: state.todos.filter((todo) => !todo.completed),
        }));
      },

      /**
       * Reorder todos (for drag and drop)
       * @param {array} reorderedTodos - New order of todos
       */
      reorderTodos: (reorderedTodos) => {
        set({ todos: reorderedTodos });
      },

      /**
       * Clear all todos
       */
      clearAll: () => {
        set({ todos: [] });
      },
    }),
    {
      name: 'todo-storage', // localStorage key
      version: 1, // Version for migrations
    }
  )
);
