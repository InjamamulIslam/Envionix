# Envionix - Environmental Monitoring Platform

A modern full-stack environmental monitoring platform built with React, TypeScript, and Express.js.

## 🚀 Features

- **Modern Frontend**: React 18 with TypeScript, Tailwind CSS, and Vite
- **Robust Backend**: Express.js with TypeScript, validation, and security middleware
- **Interactive 3D Models**: Sketchfab integration for product visualization
- **Professional Design**: Responsive design with smooth animations
- **API Integration**: RESTful API with proper error handling
- **Form Validation**: Client and server-side validation
- **Email Integration**: Contact form with email notifications
- **Analytics Ready**: Event tracking and analytics endpoints

## 📁 Project Structure

```
envionix/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API client and services
│   │   └── ...
│   ├── public/             # Static assets
│   └── package.json
├── backend/                  # Express.js backend API
│   ├── src/
│   │   ├── routes/         # API route handlers
│   │   └── index.ts        # Server entry point
│   ├── .env                # Environment variables
│   └── package.json
├── shared/                   # Shared types and utilities
├── package.json             # Root package.json for workspace management
└── README.md
```

## 🛠 Tech Stack

### Frontend
- **React 18** - Component-based UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

### Backend
- **Express.js** - Web application framework
- **TypeScript** - Type-safe server development
- **Nodemailer** - Email sending capabilities
- **Express Validator** - Request validation
- **Helmet** - Security middleware
- **Morgan** - HTTP request logger
- **CORS** - Cross-origin resource sharing

## 🚀 Getting Started

### Prerequisites

- Node.js (>=18.0.0)
- npm (>=9.0.0)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd envionix
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**
   
   **Backend** (`backend/.env`):
   ```env
   PORT=3001
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173
   
   # Email Configuration
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   FROM_EMAIL=your-email@gmail.com
   TO_EMAIL=contact@yourcompany.com
   
   JWT_SECRET=your-super-secret-jwt-key
   ```
   
   **Frontend** (`frontend/.env`):
   ```env
   VITE_API_URL=http://localhost:3001/api
   VITE_APP_NAME=Envionix
   VITE_APP_VERSION=1.0.0
   ```

### Development

1. **Start both frontend and backend**
   ```bash
   npm run dev
   ```
   This will start:
   - Frontend: http://localhost:5173
   - Backend: http://localhost:3001

2. **Start individually**
   ```bash
   # Frontend only
   npm run dev:frontend
   
   # Backend only
   npm run dev:backend
   ```

### Building for Production

```bash
# Build both frontend and backend
npm run build

# Build individually
npm run build:frontend
npm run build:backend
```

### Running in Production

```bash
npm run start
```

## 📡 API Endpoints

### Contact
- `POST /api/contact` - Submit contact form

### Demo Requests
- `POST /api/demo/request` - Request a demo
- `GET /api/demo/availability` - Get available time slots

### Analytics
- `POST /api/analytics/event` - Track user events
- `GET /api/analytics/stats` - Get analytics data

### Health Check
- `GET /api/health` - Server health status

## 🎨 Frontend Components

- **Navbar** - Navigation with smooth scrolling
- **Hero** - Landing section with device showcase
- **ProductSection** - Technical specifications with 3D model
- **ContactSection** - Contact form with validation
- **DeviceShowcase** - Interactive image modal
- **StickyBar** - Dismissible call-to-action bar

## 🔧 Development Scripts

```bash
# Development
npm run dev                 # Start both frontend and backend
npm run dev:frontend        # Start frontend only
npm run dev:backend         # Start backend only

# Building
npm run build              # Build both applications
npm run build:frontend     # Build frontend only
npm run build:backend      # Build backend only

# Linting & Type Checking
npm run lint               # Lint both applications
npm run type-check         # Type check both applications

# Utilities
npm run clean              # Clean all build artifacts and node_modules
npm run install:all        # Install dependencies for all packages
```

## 🌟 Key Features

### Interactive 3D Product View
- Integrated Sketchfab 3D model viewer
- Interactive controls for model exploration
- Professional product presentation

### Responsive Design
- Mobile-first approach
- Smooth animations and transitions
- Professional color scheme (emerald/teal)

### Form Handling
- Client-side validation with TypeScript
- Server-side validation with express-validator
- Email notifications via Nodemailer
- Proper error handling and user feedback

### Performance Optimizations
- Vite for fast builds and HMR
- Code splitting and lazy loading ready
- Optimized images and assets
- TypeScript for better development experience

## 🔒 Security Features

- Helmet.js for security headers
- CORS configuration
- Input validation and sanitization
- Environment variable management
- Type-safe API responses

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@envionix.com or create an issue in the repository.

## 🚧 Roadmap

- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] User authentication and authorization
- [ ] Real-time data monitoring dashboard
- [ ] Mobile app development
- [ ] Advanced analytics and reporting
- [ ] Multi-language support
- [ ] Automated testing suite
- [ ] CI/CD pipeline setup

---

Built with ❤️ by the Envionix Team