# VS Code Starting Guide - WNP Website Development

## 🚀 Getting Started with VS Code

### Prerequisites
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **VS Code** - [Download here](https://code.visualstudio.com/)
- **Git** - [Download here](https://git-scm.com/)

### Essential VS Code Extensions

Install these extensions for the best development experience:

#### Required Extensions
1. **ES7+ React/Redux/React-Native snippets** - `dsznajder.es7-react-js-snippets`
2. **Prettier - Code formatter** - `esbenp.prettier-vscode`
3. **ESLint** - `dbaeumer.vscode-eslint`
4. **Auto Rename Tag** - `formulahendry.auto-rename-tag`
5. **Bracket Pair Colorizer 2** - `coenraads.bracket-pair-colorizer-2`

#### Recommended Extensions
6. **GitLens** - `eamodio.gitlens`
7. **Live Server** - `ritwickdey.liveserver`
8. **Thunder Client** - `rangav.vscode-thunder-client` (for API testing)
9. **Tailwind CSS IntelliSense** - `bradlc.vscode-tailwindcss`
10. **Path Intellisense** - `christian-kohler.path-intellisense`

### Quick Install Command
Open VS Code terminal and run:
```bash
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension formulahendry.auto-rename-tag
code --install-extension bradlc.vscode-tailwindcss
```

---

## 📁 Project Setup

### 1. Open Project in VS Code
```bash
# Navigate to project directory
cd /path/to/wnp-website

# Open in VS Code
code .
```

### 2. Install Dependencies
```bash
# Install all project dependencies
npm install

# Or using pnpm (faster)
pnpm install
```

### 3. Start Development Server
```bash
# Start the development server
npm run dev

# Or with pnpm
pnpm dev
```

The website will be available at `http://localhost:5173/`

---

## 🛠️ Development Workflow

### File Structure Overview
```
wnp-website/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, logos, etc.
│   ├── components/        # Reusable React components
│   │   └── ui/           # UI components (buttons, cards, etc.)
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles and theme
│   └── main.jsx          # Application entry point
├── package.json          # Project dependencies
└── vite.config.js        # Vite configuration
```

### Key Files to Know

#### `src/App.jsx`
- Main application component
- Contains all page components and routing
- Navigation, HomePage, WebDevelopmentPage, etc.

#### `src/App.css`
- Global styles and CSS variables
- Theme colors (navy blue, green, gold from logo)
- Tailwind CSS imports

#### `src/components/ui/`
- Pre-built UI components
- Button, Card, Badge components
- Styled with Tailwind CSS

---

## 🎨 Styling Guide

### Color Scheme (From WNP Logo)
```css
/* Primary Colors */
--primary: oklch(0.25 0.1 240);     /* Navy Blue */
--secondary: oklch(0.45 0.15 140);  /* Green */
--accent: oklch(0.75 0.15 85);      /* Gold */
```

### Using Tailwind Classes
```jsx
// Primary color (Navy Blue)
<div className="bg-primary text-primary-foreground">

// Secondary color (Green)
<div className="bg-secondary text-secondary-foreground">

// Accent color (Gold)
<div className="bg-accent text-accent-foreground">
```

---

## 🔧 Common Development Tasks

### Adding a New Page
1. Create new component in `App.jsx`:
```jsx
const NewPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1>New Page</h1>
      </div>
    </div>
  );
};
```

2. Add route in the Routes section:
```jsx
<Route path="/new-page" element={<NewPage />} />
```

3. Add navigation link in `navItems` array:
```jsx
{ path: '/new-page', label: 'New Page' }
```

### Adding New Components
1. Create component file in `src/components/`
2. Import and use in `App.jsx`
3. Follow existing patterns for styling

### Modifying Styles
1. Global styles: Edit `src/App.css`
2. Component styles: Use Tailwind classes
3. Custom colors: Modify CSS variables in `:root`

---

## 📱 Responsive Design

### Breakpoints (Tailwind CSS)
- `sm:` - 640px and up (mobile landscape)
- `md:` - 768px and up (tablet)
- `lg:` - 1024px and up (desktop)
- `xl:` - 1280px and up (large desktop)

### Example Responsive Classes
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* 1 column on mobile, 2 on tablet, 3 on desktop */}
</div>
```

---

## 🚀 Building and Deployment

### Build for Production
```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

### Deployment Options
1. **Vercel** (Recommended for React apps)
2. **Netlify** (Easy static site deployment)
3. **AWS S3 + CloudFront** (Enterprise solution)
4. **GitHub Pages** (Free for public repos)

---

## 🐛 Debugging Tips

### VS Code Debugging
1. Install "Debugger for Chrome" extension
2. Set breakpoints by clicking line numbers
3. Use `console.log()` for quick debugging
4. Check browser Developer Tools (F12)

### Common Issues
1. **Import errors**: Check file paths and extensions
2. **Styling issues**: Verify Tailwind classes
3. **Component not rendering**: Check for syntax errors
4. **Build errors**: Check console for specific error messages

### Useful VS Code Shortcuts
- `Ctrl+Shift+P` - Command palette
- `Ctrl+`` - Toggle terminal
- `Ctrl+Shift+E` - Explorer panel
- `Ctrl+Shift+F` - Search across files
- `Alt+Shift+F` - Format document
- `Ctrl+D` - Select next occurrence
- `Ctrl+Shift+L` - Select all occurrences

---

## 📚 Learning Resources

### React Development
- [React Official Docs](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Vite Documentation](https://vitejs.dev/)

### Styling
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Shadcn/ui Components](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

### VS Code
- [VS Code Tips and Tricks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)
- [VS Code React Development](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial)

---

## 🔄 Git Workflow

### Basic Git Commands
```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Add new feature"

# Push to remote
git push origin main

# Pull latest changes
git pull origin main
```

### VS Code Git Integration
- Use Source Control panel (Ctrl+Shift+G)
- Stage changes by clicking "+"
- Write commit message and click "✓"
- Push/pull using sync button

---

## 📞 Support

### Getting Help
1. Check console for error messages
2. Search VS Code documentation
3. Use GitHub Issues for project-specific problems
4. Stack Overflow for general React/JavaScript questions

### Team Contact
- **Joshua Hammond** - CEO & Founder
- **Anthony Rosado** - Head Developer

---

## 🎯 Next Steps

1. **Familiarize yourself** with the project structure
2. **Install recommended extensions**
3. **Run the development server**
4. **Make a small change** to test your setup
5. **Explore the codebase** and understand the components
6. **Start building** new features!

**Happy coding! 🚀**

