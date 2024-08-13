const Notification = require("../Models/Notification");
const UserBookings = require("../Models/UserBookings");

exports.createNotification = async (req, res) => {
  const { heading, msg } = req.body;
  try {
    const newNotification = new Notification({
      user: req.user,
      heading,
      msg,
    });

    await newNotification.save();
    res.status(200).send("Notification created Successfully");
  } catch (err) {
    res.status(400).send("Error while creating notifications");
  }
};

exports.getNotification = async (req, res) => {
  try {
    const notification = await Notification.find({ user: req.user });
    res.status(200).json({ notification });
  } catch (err) {
    res.status(400).send("Error while getting notification");
  }
};

exports.deleteNotification = async (req, res) => {
  const { _id } = req.params;
  try {
    await Notification.deleteOne({ _id });
    res.status(200).send("Notification deleted Successfull");
  } catch (err) {
    res.status(400).send("Error while deleting notification");
  }
};

exports.autoEditUserBookings = async (req,res) => {
  const { serviceID } = req.params;
  const { status } = req.body;

  try{
    const data = await UserBookings.findOne({_id:serviceID})
    data.status = status;
    
    await data.save();
    res.status(200).send("Auto Editing Successfull");

  } catch(err){
    res.status(400).send("Error while autoEditing UserBookings");
  }
}