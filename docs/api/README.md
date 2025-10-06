# Backend API Documentation

## Base URL
```
Development: http://localhost:5000
Production: https://your-api-domain.com
```

## Authentication
All protected routes require a Bearer token in the Authorization header:
```
Authorization: Bearer <jwt_token>
```

## API Endpoints

### Authentication Routes (`/api/auth`)

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "student"
}
```

**Response:**
```json
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "student"
  }
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer <token>
```

### Users Routes (`/api/users`)

#### Get All Users
```http
GET /api/users
Authorization: Bearer <token>
```
*Requires admin or teacher role*

#### Get Single User
```http
GET /api/users/:id
Authorization: Bearer <token>
```

#### Update User Profile
```http
PUT /api/users/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Updated Name",
  "profile": {
    "bio": "Updated bio",
    "github": "https://github.com/username",
    "linkedin": "https://linkedin.com/in/username"
  },
  "skills": [
    {
      "name": "React",
      "level": "advanced"
    }
  ]
}
```

#### Delete User
```http
DELETE /api/users/:id
Authorization: Bearer <token>
```
*Requires admin role*

### Projects Routes (`/api/projects`)

#### Get All Projects
```http
GET /api/projects
Authorization: Bearer <token>
```

#### Create New Project
```http
POST /api/projects
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "E-commerce Web Application",
  "description": "A full-stack e-commerce solution",
  "technology": {
    "frontend": ["React", "Bootstrap"],
    "backend": ["Node.js", "Express"],
    "database": ["MongoDB"],
    "mobile": ["React Native"]
  },
  "dueDate": "2024-03-15T00:00:00.000Z",
  "priority": "high"
}
```

#### Get Single Project
```http
GET /api/projects/:id
Authorization: Bearer <token>
```

#### Update Project
```http
PUT /api/projects/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "in-progress",
  "progress": 65,
  "tasks": [
    {
      "title": "Setup React app",
      "description": "Initialize React application with TypeScript",
      "assignedTo": "user_id",
      "status": "done"
    }
  ]
}
```

#### Delete Project
```http
DELETE /api/projects/:id
Authorization: Bearer <token>
```
*Requires admin or teacher role*

## Data Models

### User Model
```javascript
{
  name: String,           // Required, max 50 characters
  email: String,          // Required, unique, valid email
  password: String,       // Required, min 6 characters, hashed
  role: String,           // 'student', 'teacher', 'admin'
  teamId: ObjectId,       // Reference to Team
  skills: [{
    name: String,
    level: String         // 'beginner', 'intermediate', 'advanced'
  }],
  profile: {
    bio: String,
    github: String,
    linkedin: String,
    website: String
  },
  isActive: Boolean,      // Default: true
  createdAt: Date,
  updatedAt: Date
}
```

### Project Model
```javascript
{
  title: String,          // Required, max 100 characters
  description: String,    // Required, max 1000 characters
  technology: {
    frontend: [String],
    backend: [String],
    database: [String],
    mobile: [String]
  },
  team: ObjectId,         // Required, reference to Team
  status: String,         // 'planning', 'in-progress', 'testing', 'completed', 'on-hold'
  priority: String,       // 'low', 'medium', 'high', 'urgent'
  startDate: Date,        // Default: now
  dueDate: Date,          // Required
  progress: Number,       // 0-100, default: 0
  tasks: [{
    title: String,        // Required
    description: String,
    assignedTo: ObjectId, // Reference to User
    status: String,       // 'todo', 'in-progress', 'review', 'done'
    dueDate: Date,
    createdAt: Date
  }],
  repository: {
    url: String,
    branch: String        // Default: 'main'
  },
  deployment: {
    frontend: String,
    backend: String,
    mobile: String
  },
  createdAt: Date,
  updatedAt: Date
}
```

### Team Model
```javascript
{
  name: String,           // Required, max 50 characters
  description: String,    // Max 500 characters
  members: [{
    user: ObjectId,       // Required, reference to User
    role: String,         // 'leader', 'frontend-dev', 'backend-dev', 'mobile-dev', 'fullstack-dev', 'designer', 'tester'
    joinedAt: Date        // Default: now
  }],
  teacher: ObjectId,      // Required, reference to User
  maxMembers: Number,     // Min: 3, Max: 5, Default: 5
  isActive: Boolean,      // Default: true
  technologies: {
    frontend: [String],
    backend: [String],
    database: [String],
    mobile: [String],
    tools: [String]
  },
  projects: [ObjectId],   // References to Projects
  createdAt: Date,
  updatedAt: Date
}
```

## Error Handling

All API responses follow this format:

### Success Response
```json
{
  "success": true,
  "data": {},
  "message": "Operation completed successfully"
}
```

### Error Response
```json
{
  "success": false,
  "error": "Error message",
  "statusCode": 400
}
```

### Common HTTP Status Codes
- `200`: Success
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `500`: Internal Server Error