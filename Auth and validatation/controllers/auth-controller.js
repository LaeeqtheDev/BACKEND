const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

// Register controller   
const registerUser = async (req, res) => {
    try {
        // Extract user info
        const { username, email, password, role } = req.body;

        // Check if user exists
        const checkExistingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (checkExistingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        // Hash user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user and save in your database
        const newlyCreatedUser = new User({
            username,
            email,
            password: hashedPassword,
            role: role || 'user'
        });

        await newlyCreatedUser.save();

        if (newlyCreatedUser) {
            res.status(200).json({
                success: true,
                message: "New user created successfully"
            });
        } else {
            res.status(400).json({
                success: false,
                message: "Unable to register user"
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong, please try again"
        });
    }
};

// Login controller
const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find if user exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid username or password, please try again"
            });
        }

        // Check if password is correct
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid username or password, please try again"
            });
        }

       //create user token
       const accessToken = jwt.sign({
        userId: user._id,
        username: user.username,
        role: user.role
       },process.env.JWT_SECRET_KEY, {
        expiresIn: '15m'
       })

       res.status(200).json({
        success: true,
        message: "LOGGED IN SUCCESSFULLY",
        accessToken

       })
      

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Failed to login, something went wrong"
        });
    }
};

module.exports = { registerUser, loginUser };
