import { Response, Request } from "express";

const world = {
  sayHello: (req: Request, res: Response) => {
    res.send("Hello World!");
  },
};

export default world;
