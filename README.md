# Auditly2025

A comprehensive audit tracking and management system designed to help organizations plan, execute, and track audit projects with ease.

## Features

- **User Management**: Manage users with role-based access (Admin, Auditor, Reviewer, Viewer)
- **Audit Tracking**: Create and track audit projects with status monitoring
- **Finding Management**: Document and track audit findings with severity levels
- **Risk Assessment**: Identify, assess, and mitigate risks with likelihood and impact analysis
- **Document Management**: Attach and organize audit-related documents
- **Collaboration**: Add comments to audits and findings for team collaboration

## Technology Stack

### Backend
- Node.js & Express.js
- Sequelize ORM
- PostgreSQL database
- RESTful API architecture

### Frontend
- React 18
- React Router v6
- Axios for API calls
- Modern responsive design

### Infrastructure
- Docker & Docker Compose
- Environment-based configuration

## Project Structure

```
Auditly2025/
├── backend/              # Backend API server
│   ├── config/          # Configuration files
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Express middleware
│   ├── models/          # Sequelize models
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── migrations/      # Database migrations
│   ├── seeders/         # Seed data
│   └── server.js        # Entry point
├── frontend/            # React frontend
│   ├── public/          # Static files
│   └── src/
│       ├── components/  # React components
│       ├── pages/       # Page components
│       └── services/    # API services
├── docs/                # Documentation
│   └── architecture.md  # Architecture documentation
├── docker-compose.yml   # Docker composition
└── .env.example         # Environment template
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v15 or higher)
- Docker & Docker Compose (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aeaton4/Auditly2025.git
   cd Auditly2025
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Choose your deployment method:**

#### Option A: Using Docker (Recommended)

```bash
docker-compose up
```

This will start:
- PostgreSQL database on port 5432
- Backend API on port 3000
- Frontend on port 3001

#### Option B: Manual Setup

**Backend:**
```bash
cd backend
npm install
npm run migrate    # Run database migrations
npm run seed       # Seed initial data
npm run dev        # Start development server
```

**Frontend:**
```bash
cd frontend
npm install
npm start          # Start React development server
```

### Database Setup

The application uses Sequelize for database management.

**Run migrations:**
```bash
cd backend
npm run migrate
```

**Seed database with sample data:**
```bash
cd backend
npm run seed
```

**Undo migrations:**
```bash
cd backend
npm run migrate:undo
```

## Usage

### Accessing the Application

- **Frontend**: http://localhost:3001
- **Backend API**: http://localhost:3000/api
- **Health Check**: http://localhost:3000/health

### API Endpoints

All endpoints are prefixed with `/api`:

#### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

#### Audits
- `GET /api/audits` - Get all audits
- `GET /api/audits/:id` - Get audit by ID (includes related data)
- `POST /api/audits` - Create new audit
- `PUT /api/audits/:id` - Update audit
- `DELETE /api/audits/:id` - Delete audit

#### Findings
- `GET /api/findings` - Get all findings
- `GET /api/findings/:id` - Get finding by ID
- `POST /api/findings` - Create new finding
- `PUT /api/findings/:id` - Update finding
- `DELETE /api/findings/:id` - Delete finding

#### Risks
- `GET /api/risks` - Get all risks
- `GET /api/risks/:id` - Get risk by ID
- `POST /api/risks` - Create new risk
- `PUT /api/risks/:id` - Update risk
- `DELETE /api/risks/:id` - Delete risk

#### Documents
- `GET /api/documents` - Get all documents
- `GET /api/documents/:id` - Get document by ID
- `POST /api/documents` - Create new document
- `PUT /api/documents/:id` - Update document
- `DELETE /api/documents/:id` - Delete document

#### Comments
- `GET /api/comments` - Get all comments
- `GET /api/comments/:id` - Get comment by ID
- `POST /api/comments` - Create new comment
- `PUT /api/comments/:id` - Update comment
- `DELETE /api/comments/:id` - Delete comment

### Sample Data

After running the seed command, the following test users are available:

- **Admin User**: admin@auditly.com (role: admin)
- **Auditor**: john.doe@auditly.com (role: auditor)
- **Reviewer**: jane.smith@auditly.com (role: reviewer)
- **Viewer**: bob.wilson@auditly.com (role: viewer)

## Development

### Backend Development

```bash
cd backend
npm run dev  # Uses nodemon for auto-reload
```

### Frontend Development

```bash
cd frontend
npm start  # React development server with hot reload
```

### Database Management

```bash
cd backend

# Create new migration
npx sequelize-cli migration:generate --name migration-name

# Create new seeder
npx sequelize-cli seed:generate --name seeder-name

# Run migrations
npm run migrate

# Run seeders
npm run seed

# Undo last migration
npm run migrate:undo

# Undo all seeders
npm run seed:undo
```

## Configuration

Environment variables can be configured in the `.env` file:

```env
# Application
NODE_ENV=development
PORT=3000

# Database
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=auditly_dev
DB_NAME_TEST=auditly_test

# Frontend
REACT_APP_API_URL=http://localhost:3000/api
```

## Architecture

For detailed architecture documentation, see [docs/architecture.md](docs/architecture.md).

Key architectural components:
- **Three-tier architecture**: Frontend, Backend API, Database
- **RESTful API**: Standard HTTP methods and status codes
- **Service Layer Pattern**: Separation of business logic from controllers
- **ORM**: Sequelize for database abstraction
- **Mock Authentication**: Placeholder for production auth system

## Security Notes

**Current Implementation (Development Only):**
- Mock authentication middleware
- No password hashing
- CORS enabled for all origins

**Production Recommendations:**
- Implement JWT-based authentication
- Add password hashing (bcrypt)
- Enable HTTPS
- Configure CORS properly
- Add rate limiting
- Implement input validation
- Add comprehensive logging
- Use secret management service

## Testing

Testing infrastructure can be added using:
- **Backend**: Jest, Supertest
- **Frontend**: Jest, React Testing Library
- **E2E**: Cypress or Playwright

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For questions or issues, please open an issue in the GitHub repository.

## Roadmap

- [ ] JWT Authentication
- [ ] File upload functionality
- [ ] Advanced search and filtering
- [ ] Report generation
- [ ] Email notifications
- [ ] Real-time updates via WebSockets
- [ ] Audit trail and version history
- [ ] Data visualization and dashboards
- [ ] Mobile responsive improvements
- [ ] API documentation (Swagger/OpenAPI)
