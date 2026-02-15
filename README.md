# 📝 Todo App - Production Ready

A scalable and maintainable To-Do application built with **React**, **Zustand**, **Framer Motion**, and **React Router**. Features drag-and-drop functionality, dark mode, and persistent local storage.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Zustand](https://img.shields.io/badge/Zustand-4.4.0-000000)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.16.0-000000)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.0-38B2AC)

## ✨ Features

### Core Features
- ✅ **Add Tasks** - Create new tasks with title and optional description
- ✏️ **Edit Tasks** - Update task title and description
- 🗑️ **Delete Tasks** - Remove individual tasks or clear all at once
- ✓ **Mark as Completed** - Toggle task completion status
- 🎯 **Drag & Drop** - Drag tasks between Pending and Completed containers using Framer Motion
- 🔍 **Task Filtering** - Automatically separates pending and completed tasks
- 💾 **Local Storage Persistence** - All tasks automatically saved to browser storage
- 🌓 **Dark Mode Toggle** - Switch between light and dark themes
- 🎨 **Beautiful UI** - Responsive design with Tailwind CSS and smooth animations

### Advanced Features
- 📱 **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- ⚡ **Fast Performance** - Optimized with Vite and React 18
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🎯 **Scalable Architecture** - Clean folder structure and reusable components
- 💡 **Motivational Quotes** - Random quotes on the home page to keep you inspired
- 🔗 **React Router** - Multi-page navigation with URL state management

## 📁 Project Structure

```
todo-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Navigation and dark mode toggle
│   │   ├── TodoItem.jsx            # Individual task component with menu
│   │   ├── TodoContainer.jsx       # Container for task lists (drag-drop enabled)
│   │   └── MotivationalQuote.jsx   # Random quotes display
│   ├── pages/
│   │   ├── Home.jsx                # Main page with pending/completed tasks
│   │   ├── AddTodo.jsx             # Form to create new tasks
│   │   └── EditTodo.jsx            # Form to edit existing tasks
│   ├── store/
│   │   └── todoStore.js            # Zustand store with persist middleware
│   ├── styles/
│   │   ├── index.css               # Tailwind and global styles
│   │   └── App.css                 # Component-specific styles
│   ├── App.jsx                     # Main app component with routing
│   └── index.jsx                   # Entry point
├── index.html                      # HTML template
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
├── package.json                    # Dependencies and scripts
├── .gitignore                      # Git ignore rules
└── README.md                       # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd todo-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

The app will automatically open in your browser at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

This generates optimized files in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```

## 🎯 How to Use

### Adding a Task
1. Click the **"Add Task"** button in the header
2. Enter a task title (required)
3. Add an optional description
4. Click **"Create Task"**

### Editing a Task
1. Click the **three-dot menu** (⋮) on any task
2. Select **"Edit"**
3. Update the title or description
4. Click **"Save Changes"**

### Completing a Task
- Click the **circle icon** next to a task to mark it complete
- Completed tasks move to the right column
- Click again to mark as pending

### Deleting a Task
1. Click the **three-dot menu** (⋮) on a task
2. Select **"Delete"**
3. Or use **"Clear All"** to remove all tasks in a container

### Drag & Drop
- Click and drag any task from **Pending** to **Completed** (or vice versa)
- The task status updates automatically
- Works smoothly on desktop and touch devices

### Dark Mode
- Click the **Sun/Moon icon** in the header to toggle dark mode
- Your preference is saved in browser storage

## 🏗️ State Management (Zustand)

The app uses **Zustand** for state management with automatic localStorage persistence.

### Store Methods

```javascript
import { useTodoStore } from './store/todoStore';

const {
  todos,                  // Array of all todos
  addTodo,                // (title, description) => void
  updateTodo,             // (id, updates) => void
  deleteTodo,             // (id) => void
  toggleComplete,         // (id) => void
  getTodoById,            // (id) => todo
  getPendingTodos,        // () => todo[]
  getCompletedTodos,      // () => todo[]
  searchTodos,            // (query) => todo[]
  clearCompleted,         // () => void
  reorderTodos,           // (reorderedTodos) => void
  clearAll,               // () => void
} = useTodoStore();
```

### Example Usage
```javascript
const { addTodo, getTodoById } = useTodoStore();

// Add a new task
addTodo('Complete project', 'Finish by Friday');

// Get a task
const todo = getTodoById(1234567890);

// All changes are automatically saved to localStorage!
```

## 🎨 Styling

The project uses **Tailwind CSS** for styling with:
- Custom color schemes for light and dark modes
- Responsive grid layout (2 columns on desktop, 1 on mobile)
- Smooth transitions and animations
- Focus states for accessibility

### Dark Mode Implementation
```javascript
const [isDarkMode, setIsDarkMode] = useState(
  localStorage.getItem('theme-mode') === 'dark'
);

// Applied to all components
className={isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}
```

## 🎭 Animations (Framer Motion)

Key animations included:
- **Page transitions** - Smooth fade in/out when navigating
- **Task animations** - Bounce effect when creating/deleting tasks
- **Menu animations** - Dropdown menu with scale and opacity
- **Drag & drop** - Native browser drag with visual feedback
- **Button interactions** - Hover and tap effects

## 💾 Local Storage

Data is automatically persisted using Zustand's `persist` middleware:
- **Key**: `todo-storage`
- **Version**: 1 (for future migrations)
- **Data**: All tasks with title, description, completion status

To clear storage:
```javascript
localStorage.removeItem('todo-storage');
```

## 📱 Responsive Design

- **Mobile (< 768px)**: Single column layout
- **Tablet (768px - 1024px)**: Responsive adjustments
- **Desktop (> 1024px)**: Two-column layout for Pending/Completed

## 🔧 Available Scripts

```bash
npm run dev      # Start development server on port 3000
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🚀 Deployment

### Deploy to Vercel
```bash
vercel
```

### Deploy to Netlify
```bash
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages
```bash
npm run build
git add dist -f
git commit -m "Deploy"
git push origin main
```

## 📦 Dependencies

### Main Dependencies
- **react** - UI library
- **react-dom** - React DOM rendering
- **react-router-dom** - Client-side routing
- **zustand** - Lightweight state management
- **framer-motion** - Animation library
- **lucide-react** - Icon library

### Dev Dependencies
- **vite** - Fast build tool
- **@vitejs/plugin-react** - React plugin for Vite
- **tailwindcss** - Utility-first CSS framework
- **postcss** - CSS processing
- **autoprefixer** - CSS vendor prefixer

## 🎓 Learning Resources

- [React Docs](https://react.dev)
- [Zustand Docs](https://github.com/pmndrs/zustand)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Router Docs](https://reactrouter.com/)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vite Docs](https://vitejs.dev)

## 🐛 Troubleshooting

### Tasks not persisting?
- Check if localStorage is enabled in your browser
- Clear browser cache and reload
- Check browser console for errors

### Dark mode not saving?
- Ensure localStorage is enabled
- Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)

### Drag & drop not working?
- Ensure JavaScript is enabled
- Try a different browser
- Check if any browser extensions are blocking drag & drop

## 📝 Best Practices Used

✅ **Component Composition** - Reusable, focused components
✅ **State Management** - Centralized state with Zustand
✅ **Code Organization** - Logical folder structure
✅ **Performance** - Optimized renders with React 18
✅ **Accessibility** - ARIA labels and keyboard navigation
✅ **Type Safety** - JSDoc comments for documentation
✅ **Error Handling** - User-friendly error messages
✅ **Responsive Design** - Mobile-first approach
✅ **Dark Mode** - System preference detection
✅ **Local Storage** - Automatic persistence

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 🎉 Future Enhancements

- [ ] Task categories/tags
- [ ] Due dates and reminders
- [ ] Recurring tasks
- [ ] Task priority levels
- [ ] Search and advanced filtering
- [ ] Export/Import as JSON
- [ ] Cloud sync (Firebase, etc.)
- [ ] Subtasks support
- [ ] Task statistics and analytics
- [ ] Keyboard shortcuts

## 👨‍💻 Author

Created with ❤️ and React

---

**Happy Task Managing! ✓**
