# React.js Boilerplate

This is a boilerplate/template project for building React.js applications, utilizing several modern technologies and libraries including Effector for state management, Farfetched for data fetching, Cypress for end-to-end testing, Bun as runtime, Vite for fast development environment, Storybook for component documentation and testing, react-testing-library and Jest for unit testing, and Emotion for styling.

## Technologies Used

- **Effector**: State management library for React applications.
- **Farfetched**: Lightweight and composable data fetching library.
- **Cypress**: End-to-end testing framework.
- **Bun**: Fast JS runtime.
- **Vite**: Fast, opinionated web dev build tool that serves your code via native ES Module imports during development.
- **Storybook**: UI component explorer for frontend developers.
- **React Testing Library** and **Jest**: For unit testing React components.
- **Emotion**: A performant and flexible CSS-in-JS library.

## Features

- Effortless state management with Effector.
- Simplified data fetching with Farfetched.
- Comprehensive testing capabilities with Cypress, Jest, and React Testing Library.
- Efficient styling using Emotion.
- Rapid development setup with Vite.
- Component documentation and testing facilitated by Storybook.

## Getting Started

### Prerequisites

Make sure you have Bun installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/jassix/react-boilerplate.git
```

2. Navigate to the project directory:

```bash
cd react-boilerplate
```

3. Install dependencies:

```bash
bun install
```

### Development

To start the development server, run:

```bash
bun dev
```

This will start the Vite development server.

### Building

To build the project for production, run:

```bash
bun run build
```

This will generate a production-ready build in the `dist` directory.

### Testing

#### Unit Testing

To run unit tests using Jest, execute:

```bash
bun run test
```

#### End-to-End Testing

Cypress is used for end-to-end testing. To run Cypress tests, use:

```bash
bun run test:e2e
```

### Storybook

To start Storybook and view your components in isolation, run:

```bash
bun storybook
```

## Folder Structure

```
/
├── public/
├── src/
│   ├── app/
│   │   ├── providers/ - Applications providers
│   │   ├── layouts/ - Different layouts for your pages
│   │   ├── router/ - Router-Component, collect your routes in one place
│   │   ├── styles/ - Global styles for your app
│   │   ├── core.tsx - Root-Component, your providers and routing must will connected there
│   │   └── index.tsx - Application entry-point
│   ├── pages/ - Pages
│   ├── widgets/ - Widgets
│   ├── features/ - Features
│   ├── entities/ - Entities
│   └── shared/ - Shared
│       ├── api/ - All requests to API
│       ├── lib/ - Additional local "libraries"
│       │    ├── media-query
│       │    └── i18n
│       ├── routing/ - Basement for routing, e.g. paths, or something else
│       ├── config/ - General config for your app
│       └── ui/ - UI-Kit, with atomic design
│           ├── atom
│           ├── molecules
│           └── organisms
└── package.json
```

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Effector](https://effector.dev/)
- [Farfetched](https://farfetched.pages.dev/)
- [Cypress](https://www.cypress.io/)
- [Bun](https://bun.sh/)
- [Vite](https://vitejs.dev/)
- [Storybook](https://storybook.js.org/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest](https://jestjs.io/)
- [Emotion](https://emotion.sh/)

---

Feel free to contribute to this project and tailor it to your specific needs! If you encounter any issues or have suggestions for improvements, please open an issue or create a pull request. Happy coding! 🚀