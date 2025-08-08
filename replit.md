# Portfolio Supremo - Digital Reality Architect

## Overview

Portfolio Supremo is a modern full-stack web application designed as a philosophical and brutalist portfolio showcase. The project demonstrates advanced web development techniques through a unique blend of aesthetic design principles, featuring a cosmic skill visualization system and immersive user experience. Built with Next.js, React, and Three.js, it serves as both a personal portfolio and a technical demonstration of cutting-edge web technologies.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using a modern React architecture with TypeScript for type safety and better developer experience. The application uses a component-based structure with shadcn/ui components for consistent design patterns. The routing system is handled by Wouter, providing a lightweight alternative to React Router.

Key design decisions:
- **Component Library**: Utilizes Radix UI primitives through shadcn/ui for accessibility and consistency
- **Styling**: Tailwind CSS with custom CSS variables for theme management and brutalist design aesthetics
- **State Management**: React Query (TanStack Query) for server state management with built-in caching and synchronization
- **Animation System**: Custom parallax effects and planned Three.js integration for 3D orbital skill visualizations

### Backend Architecture
The backend follows an Express.js architecture with TypeScript, designed for scalability and type safety. The server includes middleware for request logging, error handling, and development-specific tooling.

Core architectural patterns:
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development and planned database integration
- **Route Organization**: Modular route registration system with API prefix convention
- **Development Integration**: Vite middleware integration for hot module replacement and development server capabilities

### Data Storage Solutions
The application uses a dual-storage approach:
- **Development**: In-memory storage with a well-defined interface for rapid development
- **Production Ready**: Drizzle ORM configuration for PostgreSQL with schema-first database design
- **Session Management**: PostgreSQL session store configuration for user authentication

Database design principles:
- **Schema Definition**: Centralized schema definitions in shared directory for type consistency
- **Migration System**: Drizzle Kit for database migrations and schema management
- **Type Safety**: Zod schema validation integrated with Drizzle for runtime type checking

### Authentication and Authorization
The system is prepared for authentication through:
- **User Management**: Predefined user schema with username/password authentication
- **Session Storage**: PostgreSQL-backed session management
- **Type Safety**: Strongly typed user interfaces and validation schemas

### Development and Build System
Modern build tooling optimized for both development experience and production performance:
- **Build Tool**: Vite for fast development and optimized production builds
- **Code Quality**: TypeScript strict mode with comprehensive path aliases
- **Development Tools**: Hot module replacement, error overlay, and Replit-specific development enhancements

## External Dependencies

### Core Framework Dependencies
- **Next.js 14**: Full-stack React framework for production-ready applications
- **React 19**: Latest React version with modern hooks and concurrent features
- **TypeScript**: Type safety and enhanced developer experience
- **Express.js**: Backend server framework for API development

### Database and ORM
- **Drizzle ORM**: Modern TypeScript ORM with schema-first approach
- **PostgreSQL**: Primary database with Neon serverless integration
- **Zod**: Runtime type validation and schema definition

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Radix UI**: Accessible component primitives for complex UI patterns
- **shadcn/ui**: Pre-built component library with consistent design patterns
- **Lucide React**: Icon library for consistent iconography

### Development and Visualization
- **Three.js**: 3D graphics library for orbital skill visualizations
- **TanStack React Query**: Server state management with caching
- **Vite**: Build tool and development server
- **React Hook Form**: Form management with validation integration

### Production Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Vercel**: Planned deployment platform for production hosting
- **GitHub**: Version control and code repository management