import { Router } from "express";
import { hiHelloworld } from "../../controllers/hi/hi.controller";
const router = Router();

router.get("/", hiHelloworld);
export default router;
