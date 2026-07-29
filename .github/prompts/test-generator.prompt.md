---
description: Generate comprehensive unit tests for selected code covering happy paths, edge cases, and error scenarios.
---

# Test Generator

Generate a complete test suite for the selected code.

## Test Cases to Include
- Happy path (normal operation with expected inputs)
- Edge cases (boundaries, empty values, maximum limits)
- Error scenarios (exceptions, invalid inputs, failures)
- State transitions (different object or component states)
- Integration points (interactions with dependencies)

## Test Format

Use the Arrange-Act-Assert pattern:

```javascript
describe('functionName', () => {
  it('should [expected behavior] when [condition]', () => {
    // Arrange
    const input = ...;

    // Act
    const result = functionName(input);

    // Assert
    expect(result).toBe(...);
  });
});
```

## Requirements
- One assertion concept per test
- Descriptive test names that explain intent
- Mock or stub external dependencies
- Tests must be fast and independent of each other
