import { handler } from "./task1";

(async () => {
  const res = await handler({
    email: "test@test.com",
    password: "password123",
  });
  console.log(res);
})();
