import express from "express"

const router = express.Router();

router.get("/", (req, res) =>{  //....API Request....
    res.send("Hello This is auth end point.")
})

router.get("/register", (req, res) =>{  //....API Request....
    res.send("Hello This is register auth end point.")
})

export default router;