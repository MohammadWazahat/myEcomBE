const generateToken = require("../Auth/Auth");
const Auth = require("../Models/auth");

//Handlers or controllers : they will go in the controller file
const handleSignUp = async (req, res) => {
  try {
    const body = req.body;
    // console.log(body)
    const result = await Auth.create({
      fullName: body.fullName,
      username: body.username,
      password: body.password,
      email: body.email,
    });

    // creating payload
    const payload = {
      username: result.username,
    };

    //Generating token
    const token = generateToken(payload);

    // console.log("result", result);
    return res
      .status(201)
      .json({ msg: "success", result: result, token: token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const handleLogIn = async (req, res) => {
  // console.log("hello login");
  try {
    const { username, password } = req.body;
    // console.log(req.body);
    const result = await Auth.findOne({
      username: username,
    });
    // console.log(result);
    if (result) {
      // creating payload
      const payload = {
        username: username,
      };
      // console.log("payload is ", payload);

      // Generating token
      const token = generateToken(payload);
      // res.cookie("tk", token)
      return res
        .cookie("tk", token)
        .status(201)
        .json({ msg: "success", result: result, token: token });
    }

    return res.status(400).json({ msg: "user not found" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get or Read all users
const handleGetAuthUsers = async (req, res) => {
  const user = await Auth.find({});
  res.json(user);
};

module.exports = {
  handleSignUp,
  handleGetAuthUsers,
  handleLogIn,
};