const UrlData = require("../Models/Urls");

exports.getAllURLs = async (req, res) => {
  try {
    const userData = await UrlData.find({ _id: req.user });
    res.status(200).json({ userData });
  } catch (err) {
    res.status(400).send("Error Getting user's URL");
  }
};

exports.createShortURL = async (req, res) => {
  try {
    const { longURL } = req.body;
    const Data = await UrlData.findOne({ longURL });
    if (Data) {
      return res.status(400).send("URL already exisits");
    } else {
      function generateShortId(length) {
        const characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        const charactersLength = characters.length;

        for (let i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
        return result;
      }

      const shortURL = generateShortId(7);
      console.log(req.user);
      const new_URL = new UrlData({ longURL, shortURL, user: req.user });
      await new_URL.save();
      res.status(200).json({ new_URL });
    }
  } catch (err) {
    res.status(400).send("Error while Creating shorthen URL");
  }
};

exports.countAndRedirect = async (req, res) => {
  const { shortURL } = req.params;
  try {
    const Data = await UrlData.findOne({ shortURL });
    const User_id = "HEELLOO";
    // const User_id = Data.user.toString();
    if (!Data) {
      return res.status(400).send("URL not found");
    }
    if (User_id != req.user) {
      return res.status(400).send("Not Authorized User");
    }
    Data.clickCount = Data.clickCount + 1;
    console.log(Data.clickCount);
    await Data.save();
    res.status(200).json({ longURL: Data.longURL });
  } catch (err) {
    res.status(400).send("Error While Redirecting");
  }
};

exports.deleteURL = async (req, res) => {
  try {
    const _id = req.params.UrlId;
    await UrlData.deleteOne({ _id });
    res.status(200).send("Deleted Successfully");
  } catch (err) {
    res.status(400).send("Error while deleting URL");
  }
};
