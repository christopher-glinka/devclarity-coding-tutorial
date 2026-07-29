---
name: 'test-generator'
description: 'Generates comprehensive unit tests for selected code with multiple test cases covering happy path, edge cases, and error scenarios.'
trigger: 'Generate unit tests for the selected code'
---

# Test Generator

Write comprehensive tests that increase code confidence and catch regressions early.

## Test Coverage
- **Happy Path**: Normal operation with expected inputs
- **Edge Cases**: Boundary conditions, empty inputs, max values
- **Error Scenarios**: Exception handling, invalid inputs, failures
- **State Transitions**: Different component or object states
- **Integration Points**: How code interacts with dependencies

## Test Structure (Arrange-Act-Assert)
```
describe('functionName', () => {
  it('should do X when Y', () => {
    // Arrange: set up test conditions
    // Act: execute the code under test
    // Assert: verify expected outcomes
  });
});
```

## Requirements
- One concept per test
- Clear, descriptive test names
- Mock/stub external dependencies
- Cover multiple scenarios per function
- Tests should be fast and independent

## Example Trigger Phrases
- "Generate unit tests for this code"
- "Write tests for this function"
- "Create test coverage for this component"
- "What edge cases should I test here?"
