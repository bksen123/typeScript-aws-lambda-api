# TypeScript AWS Lambda Assignment

This project contains 3 AWS Lambda tasks and a mock JWT authorizer written in TypeScript.
It includes **local run files** to test the Lambdas without deploying to AWS, and **Jest tests** for automated testing.
Here is a **corrected and clean README version** with better wording and formatting:

```md
## 📁 Project Structure

src/
├── task1.ts # Task 1: Basic login with validation
├── task2.ts # Task 2: Weather API with caching
├── task3.ts # Task 3: Weather API with retries and error handling
├── authorizer.ts # JWT Lambda Authorizer
├── run-task1.ts # Local runner for Task 1
├── run-task2.ts # Local runner for Task 2
├── run-task3.ts # Local runner for Task 3
└── run-authorizer.ts # Local runner for the Authorizer

tests/
└── task1.test.ts # Jest unit test for Task 1

package.json
tsconfig.json
jest.config.js
```

## ⚡ Requirements to check api in local system also can test jest test.

- cd typeScript-aws-lambda-api

- npm i -f

- THEN RUN BELOW COMMAND TO TEST API

| Command                             | Purpose                        |
| ----------------------------------- | ------------------------------ |
| `npx ts-node src/run-task1.ts`      | Test login Lambda locally      |
| `npx ts-node src/run-task2.ts`      | Test weather Lambda locally    |
| `npx ts-node src/run-task3.ts`      | Test weather Lambda with retry |
| `npx ts-node src/run-authorizer.ts` | Test JWT authorizer            |
| `npm test`                          | Run Jest tests                 |
