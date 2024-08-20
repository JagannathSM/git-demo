const User = require('../Model/User');
const UserRoundResults = require('../Model/UserRoundResults');

exports.getUserData = async(req,res) => {
    try {
        const user = await User.findOne({_id:req.user}).select('-password');
        res.status(200).json({user});
      } catch (err) {
        res.status(400).send('Not able to get user data');
      }
  
}

exports.updateUserData = async(req,res) => {
    const { totalPoints } = req.body;

    try{
        const user = await User.findOne({_id:req.user});
        user.totalRoundPayed++;
        user.totalPoints = user.totalPoints + totalPoints;

        await user.save();
        res.status(200).send("User Details updated successfully")
    } catch(err){
        res.status(400).send("Not able toupdate user details")
    }
}

exports.AddUserRoundDetails = async(req,res) => {
    const { totalPoints } = req.body;
    try{
        const newUserRoundDetails = new UserRoundResults({
            user:req.user,
            roundPoint: totalPoints
        })
        await newUserRoundDetails.save();
        res.status(200).send("Round details Created Successfully");
    } catch(err){
        res.status(400).send("Error while creating User roundDetails")
    }
}

exports.GetUserRoundDetails = async(req,res) => {
    try{
        const data = await UserRoundResults.find({user:req.user});
        res.status(200).json({data});
    } catch(err){
        res.status(400).send("Error while getting UserRoundDetails")
    }
}