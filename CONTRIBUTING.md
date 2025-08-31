# Contributing to MCP OCR Server

Thank you for considering contributing to the MCP OCR Server project! Your contributions help make this project better for everyone.

## How to Contribute

1. **Fork the repository**
   - Create your own fork to work on your changes.

2. **Clone your fork**

   ```bash
   git clone https://github.com/dangvinh/mcp-ocr-server.git
   cd mcp-ocr-server
   ```

3. **Create a branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Follow the folder structure**
   - `src/` - Node.js / TypeScript code
   - `cpp/` - C++ OCR tool
   - `tests/` - Unit and integration tests
   - `examples/` - Sample files and demo usage

5. **Run tests**

   ```bash
   npm install
   npm test
   ```

   Ensure all tests pass before submitting a pull request.

6. **Follow commit message convention**
   - Use **Conventional Commits** format.
   - Examples:
     - `feat(ocr): add new OCR parsing feature`
     - `fix(ci): fix GitHub Actions workflow`
     - `chore: update README`

7. **Push changes**

   ```bash
   git push origin feature/your-feature-name
   ```

8. **Open a Pull Request**
   - Submit your PR to the `main` branch of the main repository.
   - Provide a clear description of the changes and reference any relevant issues.

## Code Style

- Node.js / TypeScript code should follow standard formatting.
- C++ code in `cpp/` should follow standard conventions and compile with the provided Makefile.
- Add tests for new features and bug fixes where appropriate.

## Reporting Issues

- Use GitHub Issues to report bugs or request features.
- Provide clear steps to reproduce issues and include any relevant logs or screenshots.

Thank you for contributing!
