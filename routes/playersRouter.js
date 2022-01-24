const express = require("express");
const router = express.Router();

const Player = require("../models/players");

router.post("/players", async (req, res,next) => {
  try {
    
    const newPlayer = await Player.create({name,address,email,password});

    res.json(newPlayer);
    // res.json("players created")

  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/players", async (req, res,next) => {
  res.send("The Players endpoint");
  try {
    const players = await Player.read();
    res.json(players);
  } catch (error) {
    next(error);
  }
});

router.patch("/players/:playersId", async (req, res ,next) => {
  res.send("The player Updated endpoint");

  try {
    
    const updatedPlayer = await Player.update(req.params.playersId, {
      password: req.body.password,
      emial: req.body.email,
      name: req.body.name,
      address: req.body.address,
    });

    res.json(updatedPlayer);
  } catch (error) {
    next(error);
  }

});
router.delete("/players/:playersId", async (req, res,next) => {
  res.send("The players delete endpoint ");
  try {
    await Player.remove(req.params.playersId);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

// router.get("/players",async(req,res)=>{
//     try {
//         const players = await Player.find();
//         res.json(players);
//    console.log("Get request");
// } catch (error) {
//     res.json("error")
// }
// })

module.exports = router;
