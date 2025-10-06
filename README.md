# WDP301 Assistants - Full-Stack Web Application Manual

A comprehensive web-based system demonstrating modern web technologies including **React**, **React Native**, **Node.js**, **Express**, and **MongoDB**. This project showcases proficiency in industry-standard web development practices, object-oriented design principles, and team collaboration workflows.

## 🚀 Live Demo & Features

This application demonstrates:
- **Frontend Development**: Modern React 18 with Bootstrap 5 for responsive UI
- **Mobile Development**: Cross-platform React Native mobile application  
- **Backend Development**: RESTful API built with Node.js and Express
- **Database Management**: MongoDB with Mongoose ODM for flexible data storage
- **Authentication**: JWT-based authentication with role-based access control
- **Object-Oriented Design**: Well-structured models, controllers, and services
- **Industry Standards**: Following best practices for maintainable, scalable code

## 📋 Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [API Documentation](#api-documentation)
- [Frontend Features](#frontend-features)
- [Mobile App Features](#mobile-app-features)
- [Database Schema](#database-schema)
- [Development Guidelines](#development-guidelines)
- [Deployment](#deployment)
- [Contributing](#contributing)

## 🛠 Technologies Used

### Frontend (React Web Application)
- **React 18.2.0** - Modern React with hooks and context API
- **React Router 6** - Single-page application routing
- **Bootstrap 5.3.0** - Responsive CSS framework
- **React Bootstrap** - Bootstrap components for React
- **React Query** - Data fetching and caching
- **React Hook Form** - Form handling with validation
- **Axios** - HTTP client for API requests
- **React Toastify** - Toast notifications

### Mobile (React Native Application)
- **React Native 0.72.6** - Cross-platform mobile development
- **Expo 49.0.0** - Development platform and tools
- **React Navigation 6** - Navigation library for React Native
- **AsyncStorage** - Local storage for mobile
- **Axios** - HTTP client for API requests

### Backend (Node.js/Express API)
- **Node.js** - JavaScript runtime environment
- **Express 4.18.2** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose 7.5.0** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing
- **Express Rate Limit** - API rate limiting

### Development & DevOps
- **Git** - Version control
- **ESLint** - Code linting
- **Jest** - Testing framework
- **Nodemon** - Development server auto-restart
- **dotenv** - Environment variable management

## 📁 Project Structure

```
wdp301-assistants/
├── client/                     # React Web Application
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   ├── LoadingSpinner.js
│   │   │   └── PrivateRoute.js
│   │   ├── pages/             # Application pages
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Products.js
│   │   │   ├── ProductDetail.js
│   │   │   └── Dashboard.js
│   │   ├── contexts/          # React contexts
│   │   │   └── AuthContext.js
│   │   ├── services/          # API services
│   │   │   └── authService.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── mobile/                    # React Native Mobile App
│   ├── src/
│   │   ├── screens/          # Mobile screens
│   │   │   ├── HomeScreen.js
│   │   │   ├── LoginScreen.js
│   │   │   ├── RegisterScreen.js
│   │   │   ├── ProductsScreen.js
│   │   │   ├── ProductDetailScreen.js
│   │   │   ├── ProfileScreen.js
│   │   │   └── LoadingScreen.js
│   │   ├── navigation/       # Navigation configuration
│   │   │   └── AppNavigator.js
│   │   ├── contexts/         # React contexts
│   │   │   └── AuthContext.js
│   │   └── services/         # API services
│   │       └── authService.js
│   ├── App.js
│   ├── app.json
│   ├── babel.config.js
│   └── package.json
├── server/                   # Node.js/Express Backend
│   ├── config/
│   │   └── database.js       # MongoDB connection
│   ├── controllers/          # Business logic
│   │   ├── authController.js
│   │   └── productController.js
│   ├── middleware/           # Custom middleware
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── models/              # Database models
│   │   ├── User.js
│   │   └── Product.js
│   ├── routes/              # API routes
│   │   ├── auth.js
│   │   ├── products.js
│   │   └── users.js
│   └── index.js             # Server entry point
├── .env.example             # Environment variables template
├── .gitignore
├── package.json             # Root package.json
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)
- **Git**

### 1. Clone the Repository
```bash
git clone https://github.com/hieufu/wdp301-assistants.git
cd wdp301-assistants
```

### 2. Install Dependencies
```bash
# Install root dependencies
npm install

# Install all project dependencies
npm run install-all
```

### 3. Environment Setup
```bash
# Copy environment template
cp .env.example .env

# Edit .env file with your configuration
nano .env
```

Required environment variables:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/wdp301-assistants
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
API_VERSION=v1
```

### 4. Database Setup
Make sure MongoDB is running on your system:
```bash
# For local MongoDB
mongod

# Or use MongoDB Atlas cloud database
# Update MONGODB_URI in .env file
```

### 5. Start Development Servers

#### Backend Server
```bash
# Start backend server
npm run dev
# Server will run on http://localhost:5000
```

#### Frontend (React Web App)
```bash
# Start React development server
npm run client
# React app will run on http://localhost:3000
```

#### Mobile App (React Native)
```bash
# Start React Native/Expo development server
npm run mobile
# Follow Expo CLI instructions to run on device/simulator
```

### 6. Verify Installation
- Backend API: http://localhost:5000/api/health
- React Web App: http://localhost:3000
- Mobile App: Follow Expo CLI instructions

## 📚 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/v1/auth/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe"
}
```

#### Login User
```http
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Current User
```http
GET /api/v1/auth/me
Authorization: Bearer <token>
```

### Product Endpoints

#### Get All Products
```http
GET /api/v1/products?page=1&limit=10&category=electronics&search=laptop
```

#### Get Single Product
```http
GET /api/v1/products/:id
```

#### Create Product
```http
POST /api/v1/products
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Laptop",
  "description": "High-performance laptop",
  "price": 999.99,
  "category": "electronics",
  "stock": 10,
  "tags": ["tech", "computers"]
}
```

#### Update Product
```http
PUT /api/v1/products/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Updated Laptop",
  "price": 899.99
}
```

#### Delete Product
```http
DELETE /api/v1/products/:id
Authorization: Bearer <token>
```

### User Management Endpoints

#### Get All Users (Admin Only)
```http
GET /api/v1/users
Authorization: Bearer <admin-token>
```

#### Get User by ID
```http
GET /api/v1/users/:id
Authorization: Bearer <token>
```

#### Update User Profile
```http
PUT /api/v1/users/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "firstName": "Updated Name",
  "lastName": "Updated Last Name",
  "avatar": "avatar-url"
}
```

## 🌐 Frontend Features

### React Web Application

#### Key Components
1. **Header Component** - Navigation bar with authentication state
2. **Footer Component** - App information and links
3. **PrivateRoute Component** - Protected route wrapper
4. **LoadingSpinner Component** - Reusable loading indicator

#### Pages
1. **Home Page** - Landing page with feature showcase
2. **Login/Register Pages** - Authentication forms
3. **Products Page** - Product listing with filters and search
4. **Product Detail Page** - Detailed product view
5. **Dashboard Page** - User dashboard for product management

#### State Management
- **AuthContext** - Global authentication state
- **React Query** - Server state management and caching
- **React Hook Form** - Form state and validation

#### Styling
- **Bootstrap 5** - Responsive CSS framework
- **Custom CSS** - Additional styling for enhanced UX
- **React Bootstrap** - Bootstrap components for React

## 📱 Mobile App Features

### React Native Application

#### Navigation Structure
- **Tab Navigation** - Bottom tabs for main screens
- **Stack Navigation** - Screen transitions and navigation
- **Authentication Flow** - Conditional rendering based on auth state

#### Screens
1. **Home Screen** - App overview and feature highlights
2. **Products Screen** - Grid layout for product browsing
3. **Product Detail Screen** - Detailed product information
4. **Profile Screen** - User profile and settings
5. **Login/Register Screens** - Authentication forms

#### Mobile-Specific Features
- **AsyncStorage** - Local data persistence
- **Touch Interactions** - Optimized for mobile gestures
- **Responsive Design** - Adapted for various screen sizes
- **Cross-Platform** - Works on both iOS and Android

## 🗄 Database Schema

### User Model
```javascript
{
  username: String (unique, required),
  email: String (unique, required),
  password: String (hashed, required),
  firstName: String (required),
  lastName: String (required),
  role: String (enum: ['user', 'admin', 'moderator']),
  avatar: String,
  isActive: Boolean,
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date
}
```

### Product Model
```javascript
{
  name: String (required),
  description: String (required),
  price: Number (required),
  category: String (enum: ['electronics', 'clothing', 'books', 'home', 'sports', 'other']),
  stock: Number (required),
  images: [{
    url: String,
    alt: String
  }],
  tags: [String],
  isActive: Boolean,
  createdBy: ObjectId (ref: 'User'),
  updatedBy: ObjectId (ref: 'User'),
  createdAt: Date,
  updatedAt: Date
}
```

## 👨‍💻 Development Guidelines

### Code Quality
- **ESLint** - Consistent code style and error detection
- **Prettier** - Code formatting
- **Object-Oriented Design** - Modular, reusable components
- **Error Handling** - Comprehensive error management
- **Validation** - Input validation on both client and server

### Security Best Practices
- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - bcrypt for secure password storage
- **Input Validation** - Sanitization and validation of user inputs
- **Rate Limiting** - API rate limiting to prevent abuse
- **CORS Configuration** - Proper cross-origin resource sharing
- **Helmet.js** - Security headers and protection

### Testing
```bash
# Run backend tests
npm test

# Run frontend tests
cd client && npm test

# Run all tests
npm run test:all
```

### Code Style
- Use **ES6+ features** (arrow functions, destructuring, async/await)
- Follow **React best practices** (hooks, functional components)
- Implement **proper error boundaries**
- Use **TypeScript** for enhanced type safety (optional)

## 🚀 Deployment

### Backend Deployment (Heroku/Railway/DigitalOcean)
```bash
# Build application
npm run build

# Set production environment variables
export NODE_ENV=production
export MONGODB_URI=your-production-mongodb-uri
export JWT_SECRET=your-production-jwt-secret

# Start production server
npm start
```

### Frontend Deployment (Netlify/Vercel)
```bash
cd client
npm run build
# Deploy the build folder
```

### Mobile App Deployment
```bash
cd mobile
# Build for production
expo build:android
expo build:ios
```

### Environment Variables for Production
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/production-db
JWT_SECRET=your-super-secure-production-jwt-secret
REACT_APP_API_URL=https://your-api-domain.com/api/v1
```

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm test`
5. Commit changes: `git commit -m 'Add amazing feature'`
6. Push to branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Review Process
- All changes require code review
- Ensure tests pass
- Follow coding standards
- Update documentation as needed

## 📖 Learning Objectives Achieved

This project demonstrates proficiency in:

### ✅ Web Development Skills
- **React Development** - Modern React patterns and best practices
- **Node.js/Express** - RESTful API development and server-side logic
- **MongoDB** - NoSQL database design and management
- **Bootstrap** - Responsive design and UI frameworks

### ✅ Object-Oriented Design
- **Model-View-Controller (MVC)** - Clear separation of concerns
- **Service Layer Pattern** - Business logic abstraction
- **Repository Pattern** - Data access abstraction
- **Middleware Pattern** - Request/response processing

### ✅ Industry Standards
- **Authentication & Authorization** - JWT-based security
- **API Design** - RESTful principles and best practices
- **Error Handling** - Comprehensive error management
- **Validation** - Input sanitization and validation
- **Security** - Industry-standard security practices

### ✅ Team Collaboration
- **Version Control** - Git workflow and branching strategies
- **Code Documentation** - Comprehensive README and inline comments
- **Project Structure** - Organized, maintainable codebase
- **Testing** - Unit and integration testing practices

## 📞 Support & Contact

For questions, issues, or contributions:
- **GitHub Issues**: [Create an issue](https://github.com/hieufu/wdp301-assistants/issues)
- **Email**: Contact the development team
- **Documentation**: Refer to this comprehensive manual

---

**WDP301 Assistants** - Demonstrating excellence in modern web development practices and technologies.