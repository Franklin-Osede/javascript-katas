# JavaScript Katas

A comprehensive collection of JavaScript exercises designed to improve your debugging skills and master common code smells.

## 🎯 Overview

This repository contains **100 code smell exercises** and **14 practice exercises** to help you master JavaScript fundamentals, debugging techniques, and common programming patterns.

## 📁 Project Structure

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
│   ├── exercises/            # 14 interview exercises
│   ├── practice/             # Empty practice files
│   └── exercises/tests/     # Test files for exercises
├── package.json
└── README.md
```

## 🐛 Code Smells (100 Exercises)

Practice identifying and fixing common JavaScript issues:

- **Memory Leaks** - Event listeners, closures, global variables
- **Infinite Loops** - Loop conditions, recursion
- **Race Conditions** - Async operations, shared state
- **Type Errors** - Data type validation, null/undefined handling
- **Performance Issues** - Algorithm optimization, resource usage
- **Scope Problems** - Variable scope, closure behavior
- **Mutation Issues** - Object/array immutability
- **Async/Await Pitfalls** - Promise handling, error management
- **Logic Errors** - Boolean logic, comparison operators
- **Array/Object Bounds** - Index access, property validation

## 💼 Practice Exercises (14 Categories)

Master common programming topics:

- **Array Manipulation** - Filter, map, reduce, sorting
- **String Manipulation** - Parsing, validation, transformation
- **Object Manipulation** - Deep cloning, merging, iteration
- **Async Programming** - Promises, async/await, error handling
- **Algorithms** - Sorting, searching, recursion
- **Data Structures** - Stacks, queues, trees, graphs
- **Functional Programming** - Pure functions, immutability
- **Error Handling** - Try/catch, custom errors, validation
- **Performance Optimization** - Caching, debouncing, throttling
- **Testing** - Unit tests, mocking, test utilities
- **DOM Manipulation** - Event handling, element creation
- **Security** - XSS prevention, input validation
- **Utilities** - Helper functions, common patterns
- **Mock Interview** - Real interview scenarios

## 🛠️ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Franklin-Osede/javascript-katas.git

# Navigate to the project
cd javascript-katas

# Install dependencies
npm install
```

### Running Tests

```bash
# Run all tests
npm test

# Run specific test files
npm test src/code-smells/smells-1-10/tests/

# Run with coverage
npm run test:coverage
```

## 🎯 How to Use

### Code Smells Practice

1. **Open a code smell file** (e.g., `smell1-memory-leak.js`)
2. **Read the TODO comments** to understand the problem
3. **Use debugging techniques** to identify the issue
4. **Write tests** in the corresponding test file
5. **Fix the code** and verify your solution

### Practice Exercises

1. **Open an exercise file** (e.g., `array-manipulation.js`)
2. **Read the requirements** in the TODO comments
3. **Implement the solution** in the practice file
4. **Write tests** to validate your implementation
5. **Compare with the exercise solution**

## 🔧 Debugging Techniques

Master these debugging skills:

- **Console Methods**: `log()`, `error()`, `warn()`, `info()`, `table()`, `group()`, `time()`, `trace()`, `count()`, `assert()`, `dir()`
- **Browser DevTools**: Breakpoints, step-through debugging, performance profiling
- **Memory Debugging**: Heap snapshots, memory leaks detection
- **Performance Analysis**: Execution time, resource usage, bottlenecks

## 📚 Learning Path

### Week 1: Code Smells (1-20)
- Focus on basic debugging techniques
- Practice with console methods
- Learn to identify common issues

### Week 2: Code Smells (21-40)
- Advanced debugging scenarios
- Performance optimization
- Memory management

### Week 3: Code Smells (41-60)
- Complex async patterns
- Error handling strategies
- Testing methodologies

### Week 4: Code Smells (61-80)
- Advanced JavaScript concepts
- Scope and closure issues
- Object manipulation

### Week 5: Code Smells (81-100)
- Expert-level debugging
- Complex algorithms
- Advanced programming patterns

### Week 6-7: Practice Exercises
- Practice common programming challenges
- Implement solutions from scratch
- Master pair programming scenarios

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by common JavaScript programming patterns
- Designed for practical debugging practice
- Focused on real-world scenarios

---

**Happy Coding! 🚀**

*Practice makes perfect - especially when debugging JavaScript!*