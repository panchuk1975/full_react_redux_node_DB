const { Router } = require("express");
const Client = require("../models/Client");
const auth = require("../middleware/auth.middleware");
const router = Router();

router.post("/create", auth, async (req, res) => {
  try {
    // get from request body 
    const { officialName } = req.body.officialName;  
     // is exist in db
    const existing = await Client.findOne({ officialName });
    if (existing) {
      //if link exist send it in respond
      return res.json({ message: "Client is exists!" });
    } // if client not exist let create new client
    const client = new Client({
      // create new object with all parameters
      ...req.body,
    });
    // let save
    const getAsk = await client.save();
    //if save sucsessfully
    res.status(201).json({
      message: `New client was created succsessfully!`,
      getAsk,
    });
  } catch (error) {
    res.status(500).json({ message: `Server error:${error.message}!` });
  }
});

router.get("/", auth, async (req, res) => {
  // auth check!!!
  try {
    const clients = await Client.find();
    //{owner:req.user.userId} if need user clients
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: "Somsing wrong in get clients!" });
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    res.json(client);
  } catch (error) {
    res.status(500).json({ message: "Somsing wrong in get client!" });
  }
});

module.exports = router;
