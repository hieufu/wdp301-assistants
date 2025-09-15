#!/bin/bash

# WDP301 Assistants Project Setup Script
# This script sets up the entire fullstack development environment

echo "🚀 Setting up WDP301 Assistants Fullstack Project..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js (v14 or higher) first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Check if MongoDB is running (optional for development)
if command -v mongod &> /dev/null; then
    echo "✅ MongoDB is available"
else
    echo "⚠️  MongoDB not found locally. You can use MongoDB Atlas for cloud database."
fi

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Setup Backend
echo "🔧 Setting up Backend (Node.js + Express + MongoDB)..."
cd backend
npm install

# Copy environment template
if [ ! -f .env ]; then
    cp .env.example .env
    echo "📝 Created backend/.env file. Please update with your configuration."
fi

cd ..

# Setup Frontend
echo "🎨 Setting up Frontend (React + TypeScript + Bootstrap)..."
cd frontend
# Dependencies already installed during create-react-app

cd ..

# Setup Mobile
echo "📱 Setting up Mobile (React Native + Expo)..."
cd mobile
# Dependencies already installed during create-expo-app

cd ..

echo "✅ Setup completed successfully!"
echo ""
echo "🎯 Next steps:"
echo "1. Start MongoDB (if using local instance)"
echo "2. Update backend/.env with your database configuration"
echo "3. Start the development servers:"
echo ""
echo "   Backend:  cd backend && npm run dev"
echo "   Frontend: cd frontend && npm start"
echo "   Mobile:   cd mobile && npm start"
echo ""
echo "🌐 Access URLs:"
echo "   Backend API: http://localhost:5000"
echo "   Frontend:    http://localhost:3000"
echo "   Mobile:      Use Expo Go app to scan QR code"
echo ""
echo "📚 Check the docs/ directory for detailed documentation."
echo ""
echo "Happy coding! 🎉"