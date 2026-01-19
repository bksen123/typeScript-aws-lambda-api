import jwt from "jsonwebtoken";

export interface AuthInput {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  token?: string;
  error?: string;
}

const JWT_SECRET = process.env.JWT_SECRET || "typexcipawsmler"; // Ideally use env variable

export const handler = async (event: AuthInput): Promise<AuthResponse> => {
  const isValidEmail = event.email.includes("@");
  const isValidPassword = event.password.length >= 8;

  if (isValidEmail && isValidPassword) {
    // Create JWT token
    const token = jwt.sign(
      { email: event.email }, // payload
      JWT_SECRET,
      { expiresIn: "1h" }, // token valid for 1 hour
    );

    return { success: true, token };
  }

  return { success: false, error: "Invalid email or password" };
};
