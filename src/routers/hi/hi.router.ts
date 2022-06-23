import { Router } from "express";
import controller from "../../controllers/hi/hi.controller";
const router = Router();

router.get("/", controller.sayHello);
export default router;
