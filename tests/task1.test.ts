
import { handler } from "../src/task1";

test("valid credentials", async () => {
  const res = await handler({ email: "test@test.com", password: "password123" });
  expect(res.success).toBe(true);
});

test("invalid credentials", async () => {
  const res = await handler({ email: "test", password: "123" });
  expect(res.success).toBe(false);
});
