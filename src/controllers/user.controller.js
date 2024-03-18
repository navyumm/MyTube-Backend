import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
    res.status(400).json({
        message: "hiyo"
    });

    // get user details from the users 
    // validation - not empty
    // check if user already exists : username, email
    // check for images, check for avatar
    // upload them to cloudinary
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res


    // const { fullName, email, username, password} = req.body
    // console.log("email: ", email);
});

export { registerUser };
