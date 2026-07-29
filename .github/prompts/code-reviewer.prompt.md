---
description: Review code for bugs, performance issues, accessibility violations, and best practice deviations.
---

# Code Reviewer

Review the selected code and provide structured feedback.

## Review Checklist
- [ ] Logic errors or unhandled edge cases
- [ ] Performance issues (nested loops, unnecessary DOM queries, N+1 patterns)
- [ ] Accessibility violations (semantic HTML, keyboard navigation, ARIA labels)
- [ ] Security concerns (input validation, XSS, injection risks)
- [ ] Code style inconsistencies or naming clarity issues
- [ ] Testability and maintainability

## Output Format

For each issue found:
1. **Issue**: What's wrong
2. **Severity**: Critical / High / Medium / Low
3. **Fix**: Concrete code change
4. **Why**: Explanation of why this is better
