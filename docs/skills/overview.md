# AI-Assisted Development Skills

This documentation covers the 5 skills available in this project for leveraging AI to improve your development workflow.

## Quick Reference

| Skill | Purpose | Example Trigger |
|-------|---------|----------------|
| Code Explainer | Understand unfamiliar code | "Explain how this code works" |
| Code Reviewer | Catch bugs and quality issues | "Review this code for bugs" |
| Architecture Analyzer | Understand system design | "Analyze the architecture of my codebase" |
| Test Generator | Write comprehensive tests | "Generate unit tests for this code" |
| Performance Auditor | Identify bottlenecks | "Audit the performance of this code" |

## Skills Demo

View interactive before/after examples for all 5 skills in the web app:

```
http://localhost:8000/skills-demo.html
```

## Recommended Learning Path

1. **Code Explainer** — Learn how to understand existing code with AI help
2. **Code Reviewer** — Catch issues before they reach production
3. **Architecture Analyzer** — Think about system design and structure
4. **Test Generator** — Build confidence with comprehensive test coverage
5. **Performance Auditor** — Optimize for speed and efficiency

## Skill Files

Each skill has a definition file in `.github/skills/` that describes:
- What the skill does
- When to use it
- Example trigger phrases for Copilot

| Skill | Definition |
|-------|-----------|
| Code Explainer | [`.github/skills/code-explainer/SKILL.md`](../../.github/skills/code-explainer/SKILL.md) |
| Code Reviewer | [`.github/skills/code-reviewer/SKILL.md`](../../.github/skills/code-reviewer/SKILL.md) |
| Architecture Analyzer | [`.github/skills/architecture-analyzer/SKILL.md`](../../.github/skills/architecture-analyzer/SKILL.md) |
| Test Generator | [`.github/skills/test-generator/SKILL.md`](../../.github/skills/test-generator/SKILL.md) |
| Performance Auditor | [`.github/skills/performance-auditor/SKILL.md`](../../.github/skills/performance-auditor/SKILL.md) |

## Prompt Files

Each skill also has a Copilot prompt file in `.github/prompts/` for structured AI responses:

- `.github/prompts/code-reviewer.prompt.md`
- `.github/prompts/architecture-analyzer.prompt.md`
- `.github/prompts/test-generator.prompt.md`
- `.github/prompts/performance-auditor.prompt.md`

## Best Practices

- Use **Code Explainer** when reading any unfamiliar code
- Use **Code Reviewer** before every commit or pull request
- Use **Architecture Analyzer** during feature planning sessions
- Use **Test Generator** immediately after writing a new function
- Use **Performance Auditor** when users report slowness or when processing large datasets
