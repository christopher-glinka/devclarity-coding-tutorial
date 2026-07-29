---
description: Audit code for performance bottlenecks, inefficiencies, and optimization opportunities. Provide complexity analysis and concrete improvements.
---

# Performance Auditor

Audit the selected code for performance issues and provide optimized alternatives.

## Areas to Audit
- Runtime complexity (Big O analysis)
- Memory usage and potential leaks
- DOM operations and reflow/repaint triggers
- Asset loading and unnecessary imports
- Caching and memoization opportunities
- Event handling (debouncing, throttling)

## Output Format

For each issue found:
1. **Problem**: What's slow and where in the code
2. **Complexity**: Current Big O and why it's a problem
3. **Impact**: Real-world effect at scale (e.g. "1000 items = 1M operations")
4. **Solution**: Optimized code with explanation
5. **New Complexity**: Improved Big O after optimization
6. **Trade-offs**: Any downsides to the optimization (memory vs speed, readability, etc.)
