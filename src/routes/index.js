import { Router } from "express";
import { generateJwt, verifyJwt } from "../middlewares/auth.js";
import Services from "../services/index.js";
const router = Router();

router

    .use("/login", generateJwt)

    .use(verifyJwt)

    .get("/enpoint1", Services.enpoint1)

    .get("/enpoint2", Services.enpoint2)

    .get("/enpoint3", Services.enpoint3)

    .get("/enpoint4", Services.enpoint4)

    .get("/enpoint5", Services.enpoint5)

    .get("/enpoint6", Services.enpoint6)

    .get("/enpoint7", Services.enpoint7)

    .get("/enpoint8", Services.enpoint8)

    .get("/enpoint9", Services.enpoint9)

    .get("/enpoint10", Services.enpoint10)

    .get("/enpoint11", Services.enpoint11)

    .get("/enpoint12", Services.enpoint12)

    .get("/enpoint13", Services.enpoint13)

    .get("/enpoint14", Services.enpoint14)

    .get("/enpoint15", Services.enpoint15)

    .get("/enpoint16", Services.enpoint16)

    .get("/enpoint17", Services.enpoint17)

    .get("/enpoint18", Services.enpoint18)

    .get("/enpoint19", Services.enpoint19)

    .get("/enpoint20", Services.enpoint20)

    .get("/enpoint21", Services.enpoint21)

    .get("/enpoint22", Services.enpoint22)

    .get("/enpoint23", Services.enpoint23)

    .get("/enpoint24", Services.enpoint24)

    .get("/enpoint25", Services.enpoint25)

    .get("/enpoint26", Services.enpoint26)

    .get("/enpoint27", Services.enpoint27)

    .get("/enpoint28", Services.enpoint28)

    .get("/enpoint29", Services.enpoint29)

    .get("/enpoint30", Services.enpoint30)

    .get("/enpoint31", Services.enpoint31)

    .get("/enpoint32", Services.enpoint32)

    .get("/enpoint33", Services.enpoint33)


export default router