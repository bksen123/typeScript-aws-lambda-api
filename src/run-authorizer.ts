import { handler } from "./authorizer";

(async () => {
  const res = await handler({
    headers: {
      Authorization: "Bearer validToken123",
    },
  });

  console.log(res);
})();
