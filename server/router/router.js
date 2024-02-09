import { Router } from "express";
import * as controler from "../controller/controler.js";
const router=Router();
console.log("reach router");
router.route("/add").post(controler.addData)
router.route("/get").get(controler.getData)
router.route("/delete/:id").delete(controler.deleteData)
router.route("/edit/:id").put(controler.editData)
export default router;