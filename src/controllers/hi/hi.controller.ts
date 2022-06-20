import { Response, Request } from "express";

export function hiHelloworld(res: Response, req: Request) {
  res.send("Hello World");
}
