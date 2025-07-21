import express from "express";
import { body, validationResult } from "express-validator";
import { validate } from "./middleware_validate.js";
const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Validation Demo!");
});

app.post(
  "/register",
  [
    //Validating name field
    body("name")
      .notEmpty()
      .withMessage("Name is required")
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage("Name must be between 2 and 50 characters long"),

    //Validating email field
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid email format")
      .custom((value) => {
        const allowedDomains = ["example.com", "company.org", "business.net"];
        const domain = value.split("@")[1];
        if (!allowedDomains.includes(domain)) {
          throw new Error(
            `Email must be from the following domains: ${allowedDomains.join(
              ", "
            )}`
          );
        }
        return true;
      })
      .normalizeEmail(),

    //Validating password field
    body("password")
      .notEmpty()
      .withMessage("Password required")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long")
      .matches(/[A-Z]/)
      .withMessage("Password must at least contain one capital letter.")
      .matches(/[0-9]/)
      .withMessage("Password must at least contain one number"),
  ],
  validate,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(404).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    const user = { name, email, password };
    res.status(201).json({
      message: "User registered successfully",
      user: { name, email },
    });
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
