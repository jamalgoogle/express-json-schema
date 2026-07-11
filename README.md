# Express.js JSON Schema Validator

A complete, production-ready **Express.js** microservice that validates incoming user profile data using **JSON Schema** via the **Ajv** library. It automatically generates and increments user IDs (`auto-increment`) for successfully validated payloads.

---

## 📂 Project Structure

Your project directory should look like this:
```text
express-json-schema/
├── node_modules/       # (Generated automatically, ignored by Git)
├── .gitignore          # Prevents pushing node_modules/
├── package.json        # Project metadata and dependencies
├── README.md           # Project documentation (This file)
└── server.js           # Main application logic
```
```bash
# Initialize a new Node.js project
npm init -y
```
```bash
#Install dependencies
npm install express ajv ajv-formats
```
#Run the server
```bash
node server.js
```

