import { Router } from "express";
import { testpasser } from "../services/services";

export const router: Router = Router();
router.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


router.get("/login",testpasser.getlogin);

router.post("/signup",testpasser.signup);

router.get('/verifylogin',testpasser.verifylogin);

router.get("/homepage",testpasser.getshow);

router.get('/history',testpasser.gethistory);

router.delete('/clearhistory',testpasser.deletehistory)

router.get('/next',testpasser.next)

router.get('/verifysignup' , testpasser.verifysignup)