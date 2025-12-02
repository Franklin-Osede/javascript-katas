# JavaScript Katas

A personal collection of JavaScript exercises I'm working on to improve my debugging skills and master common code smells.

## Overview

This is my personal practice repository containing 100 code smell exercises and 14 practice exercises to help me master JavaScript fundamentals, debugging techniques, and common programming patterns. This is a work in progress project that I'm actively developing.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Code Smells](#code-smells)
- [Practice Exercises](#practice-exercises)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Debugging Techniques](#debugging-techniques)
- [Learning Path](#learning-path)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

```
javascript-katas/
├── src/
│   ├── code-smells/           # 100 code smell exercises
│   │   ├── smells-1-10/      # Code smells 1-10 + tests
│   │   ├── smells-11-20/     # Code smells 11-20 + tests
│   │   ├── smells-21-30/     # Code smells 21-30 + tests
│   │   ├── smells-31-40/     # Code smells 31-40 + tests
│   │   ├── smells-41-50/     # Code smells 41-50 + tests
│   │   ├── smells-51-60/     # Code smells 51-60 + tests
│   │   ├── smells-61-70/     # Code smells 61-70 + tests
│   │   ├── smells-71-80/     # Code smells 71-80 + tests
│   │   ├── smells-81-90/     # Code smells 81-90 + tests
│   │   └── smells-91-100/    # Code smells 91-100 + tests
│   ├── exercises/            # 14 interview exercises with solutions
│   ├── practice/             # Practice files for my solutions
│   └── exercises/tests/      # Test files for exercises
├── package.json
└── README.md
```

## Code Smells

I'm practicing identifying and fixing common JavaScript issues across 100 exercises:

- Memory Leaks - Event listeners, closures, global variables
- Infinite Loops - Loop conditions, recursion
- Race Conditions - Async operations, shared state
- Type Errors - Data type validation, null/undefined handling
- Performance Issues - Algorithm optimization, resource usage
- Scope Problems - Variable scope, closure behavior
- Mutation Issues - Object/array immutability
- Async/Await Pitfalls - Promise handling, error management
- Logic Errors - Boolean logic, comparison operators
- Array/Object Bounds - Index access, property validation
- Division by Zero - Mathematical error handling
- Stack Overflow - Recursion depth issues
- Type Coercion - Implicit type conversion problems
- Hoisting Issues - Variable and function hoisting
- This Binding - Context binding problems

## Practice Exercises

I'm working through 14 exercise categories to master common programming topics:

- Array Manipulation - Filter, map, reduce, sorting
- String Manipulation - Parsing, validation, transformation
- Object Manipulation - Deep cloning, merging, iteration
- Async Programming - Promises, async/await, error handling
- Algorithms - Sorting, searching, recursion
- Data Structures - Stacks, queues, trees, graphs
- Functional Programming - Pure functions, immutability
- Error Handling - Try/catch, custom errors, validation
- Performance Optimization - Caching, debouncing, throttling
- Testing - Unit tests, mocking, test utilities
- DOM Manipulation - Event handling, element creation
- Security - XSS prevention, input validation
- Utilities - Helper functions, common patterns
- Mock Interview - Real interview scenarios

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project
cd javascript-katas

# Install dependencies
npm install
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run specific test files
npm test src/code-smells/smells-1-10/tests/

# Run with coverage
npm run test:coverage
```

## How I Use This

### Code Smells Practice

1. I open a code smell file (e.g., `smell1-memory-leak.js`)
2. I read the TODO comments to understand the problem
3. I use debugging techniques to identify the issue
4. I write tests in the corresponding test file
5. I fix the code and verify my solution

### Practice Exercises

1. I open an exercise file (e.g., `array-manipulation.js`)
2. I read the requirements in the TODO comments
3. I implement my solution in the corresponding practice file
4. I write tests to validate my implementation
5. I compare with the exercise solution

## Debugging Techniques

I'm learning and practicing these debugging skills throughout the exercises:

- Console Methods: `log()`, `error()`, `warn()`, `info()`, `table()`, `group()`, `time()`, `trace()`, `count()`, `assert()`, `dir()`
- Browser DevTools: Breakpoints, step-through debugging, performance profiling
- Memory Debugging: Heap snapshots, memory leaks detection
- Performance Analysis: Execution time, resource usage, bottlenecks
- Node.js Debugging: Inspector protocol, VS Code debugging

## Learning Path

This is my planned learning path as I work through the exercises:

### Week 1: Code Smells (1-20)
Focusing on basic debugging techniques, console methods, and identifying common issues.

### Week 2: Code Smells (21-40)
Working on advanced debugging scenarios, performance optimization, and memory management.

### Week 3: Code Smells (41-60)
Practicing complex async patterns, error handling strategies, and testing methodologies.

### Week 4: Code Smells (61-80)
Learning advanced JavaScript concepts, scope and closure issues, object manipulation.

### Week 5: Code Smells (81-100)
Tackling expert-level debugging, complex algorithms, advanced programming patterns.

### Week 6-7: Practice Exercises
Practicing common programming challenges, implementing solutions from scratch.

## Status

This is a work in progress project. I'm actively adding more exercises and features as I continue learning and practicing JavaScript.

## License

This project is open source and available under the MIT License.
