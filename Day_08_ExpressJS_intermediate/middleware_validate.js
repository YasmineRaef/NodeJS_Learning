import { validationResult } from "express-validator";

export const validate = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const formattedErrors = {};
    errors.array().forEach((error) => {
      if (!formattedErrors[error.path]) {
        formattedErrors[error.path] = [];
      }
      formattedErrors[error.path].push(error.msg);
    });
    return res.status(400).json({
      success: false,
      message: "Validation Failed",
      errors: formattedErrors,
    });
  }
  next();
};
