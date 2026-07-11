const express = require('express');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const app = express();
app.use(express.json());

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

const userSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
    username: { type: "string", minLength: 3 },
    email: { type: "string", format: "email" },
    age: { type: "integer", minimum: 18 },
    skills: { type: "array", items: { type: "string" }, uniqueItems: true }
  },
  required: ["username", "email"],
  additionalProperties: false
};

const validateUser = ajv.compile(userSchema);

let currentId = 1;

app.post('/user', (req, res) => {
  req.body.id = currentId++;

  const isValid = validateUser(req.body);

  if (!isValid) {
    currentId--;
    return res.status(400).json({ errors: validateUser.errors });
  }

  res.status(200).json({
    message: "User Created Succesfully",
    data: req.body
  });
});

app.listen(3000, () => console.log('السيرفر يعمل على منفذ 3000'));