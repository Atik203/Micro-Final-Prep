# Guidelines for Contributing

Contributions to improve this Micro Lab study guide are welcome! Whether it is correcting a typo in a pin description, adding a new practice quiz question, or styling some cards, your help is appreciated.

Please follow these guidelines to make collaboration smooth.

---

## 🛠️ How to Contribute

### 1. Report Issues / Suggest Improvements
Before writing any code, open a GitHub Issue to explain your findings or what you intend to add. This prevents duplicate work.

### 2. Standard Branching Strategy
Create a descriptive branch name from `main`:
- For fixes: `fix/correction-to-ex2-pinout`
- For content additions: `feat/add-arduino-quiz-questions`
- For styling improvements: `refactor/improve-mobile-code-margins`

### 3. Coding Standards
- **HTML Structure**: Keep semantic element hierarchy. Wrap pin lists in list items (`li`) or tabular rows (`tr`).
- **Responsive Classes**: Use responsive utilities (like Tailwind) carefully. Do not break custom designs from `style.css`.
- **Reference Integrity**: Ensure all pins and connections strictly match UIU CSE 4326 course/lab documents.

### 4. Submitting a Pull Request
1. Commit your changes with clear, descriptive commit messages.
2. Push your branch to GitHub.
3. Open a Pull Request referencing the related issue.
4. Verify your branch builds successfully and preview it in a local browser to ensure styling is correct.
