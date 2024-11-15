# Portfolio Website - [loikfekkai.dev](https://loikfekkai.dev)

![Project Status: Active](https://img.shields.io/badge/Project_Status-Active-green)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-blue)
![React](https://img.shields.io/badge/React-18.2-blue)

An internationalized portfolio website built with React, showcasing professional experience and projects using a clean architecture pattern.

## Features

- 🌍 Internationalization (English/French)
- 📱 Fully responsive layout
- ⚡ Optimized performance
- 🧩 Modular architecture

## Tech Stack

- **React** - Frontend library for building user interfaces
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **HeadlessUI** - Unstyled, accessible UI components
- **React Router** - Client-side routing
- **TypeScript** - Static typing for enhanced development experience

## Project Overview

This project demonstrates how to build a scalable React application using clean architecture principles. Instead of placing all logic within components or relying solely on state management libraries, it utilizes a thoughtful approach with clear boundaries between different parts of the application.

By implementing the MVP (Model-View-Presenter) pattern along with controllers, the project achieves a separation of concerns, making the codebase more maintainable, testable, and scalable.

### The Big Picture

```
Frontend (React + Vite)
   │
   ├── Views (React Components)
   │      Pure presentation, no business logic
   │
   ├── Controllers
   │      Handle user interactions and coordinate services
   │
   ├── Presenters
   │      Manage view state and presentation logic
   │
   ├── ViewModels
   │      Immutable data structures for views
   │
   ├── Services
   │      Core business logic and external integrations
   │
   └── Domain Objects
         The building blocks of my business logic
```

## Architecture

The project follows a clean architecture pattern with clear separation of concerns, implementing the MVP (Model-View-Presenter) pattern with additional controllers for complex interactions.

### Core Architectural Components

#### 1. Presentation Layer

- **View (React Components)**
  - Purely presentational components
  - Receive data through props
  - Emit user actions to presenters/controllers
- **Presenter**

  - Manages view state through ViewModels
  - Handles business logic
  - Communicates with services

#### 2. Domain Layer

- **Services**

  - Handle core business logic
  - Provide interfaces for data operations
  - Examples: `TranslatingService`, `MailingService`, `NotificationsService`

- **Controllers**
  - Handle complex user interactions
  - Coordinate between multiple services
  - Example: `LangController` for language switching

#### 3. Data Layer

- **Cache**
  - Manages application state
  - Provides subscription mechanism
  - Example: `GlobalCache` for language preferences

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/Lokicoule/loikfekkai.dev.git
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Prior art and inspirations

- [DDD Forum](https://github.com/stemmlerjs/dddforumv2)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
