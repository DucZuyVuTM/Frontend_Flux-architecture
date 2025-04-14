# Simple Flux Counter

**[Live Demo](https://DucZuyVuTM.github.io/Frontend_Flux-architecture/)**

A minimal React application implementing the **Flux architecture** manually (without the `flux` library). The project features a counter with increment, decrement and reset functionality, built using **React 18**, **TypeScript**, and **Vite**.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Flux Architecture](#flux-architecture)
- [Contributing](#contributing)

## Features
- A counter that increments, decrements or resets when buttons are clicked.
- Pure Flux architecture with custom **Dispatcher**, **Actions**, **Store**, and **View**.
- No external Flux library dependencies.
- Type-safe code with TypeScript.
- Fast development with Vite.

## Technologies
- **React**: ^18.3.1
- **TypeScript**: ^5.5.3
- **Vite**: ^5.4.8
- **ESLint**: For linting and code quality
- **Node.js**: >= 18.x

## Project Structure
```
Frontend_Flux-architecture
├── src/
│   ├── actions/
│   │   └── CounterActions.ts    # Defines increment/decrement actions
│   ├── components/
│   │   └── Counter.tsx          # React component for UI
│   ├── stores/
│   │   └── CounterStore.ts      # Manages counter state
│   ├── App.tsx                  # Main app component
│   ├── dispatcher.ts            # Custom Flux Dispatcher
│   ├── favicon.png              # App favicon
│   ├── main.tsx                 # Entry point
│   └── styles.css               # Basic styling
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── README.md                    # This file
├── tsconfig.json                # TypeScript configuration
├── tsconfig.node.json           # TypeScript config for Node files
└── vite.config.ts               # Vite configuration
```


## Installation
1. **Clone the repository** (after it's pushed to GitHub):
    ```bash
    git clone https://github.com/DucZuyVuTM/Frontend_Flux-architecture.git
    cd Frontend_Flux-architecture
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

## Running the Project
1. **Start the development server**:
    ```bash
    npm run dev
    ```

2. Open your browser and navigate to `http://localhost:5173`.

3. You should see a counter with Increment, Decrement and Reset buttons.

## Flux Architecture

This project implements the Flux architecture manually:

- **Actions**: `CounterActions` defines `increment`, `decrement`, and `reset` actions.
- **Dispatcher**: `AppDispatcher` dispatches actions to the store.
- **Store**: `CounterStore` manages the counter state and notifies the view of changes using callbacks.
- **View**: `Counter` component renders the UI and triggers actions.

**Data Flow**:

1. User clicks a button → `CounterActions` creates an action.
2. `AppDispatcher` sends the action to `CounterStore`.
3. `CounterStore` updates `count` and notifies the `Counter` component.
4. `Counter` re-renders with the new `count`.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Create a Pull Request on GitHub.
