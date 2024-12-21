const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://laeeqahmed656:laeeqahmed656@cluster0.uqe7m.mongodb.net/")
.then(()=>console.log("Connection successfull"))
.catch((e)=>console.log(e))


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    isAtive: Boolean,
    tags: [String],
    createdAt: {type: Date, default: Date.now}

})

//create user model
const User = new mongoose.model('User', userSchema)

async function runQueryExamples(){
    try {
        //create a new document
        const newUser = await User.create({
            name: 'Updated User',
            email: 'Updateduser@gmail.com',
            age:    '12',
            isAtive: true,
            tags: ['Updated Developer'],
        })
        console.log('Created new user successfully', newUser);

        // const allUsers = await User.find({})
        // console.log(allUsers)
        
        //query
        // const getUserofActiveFalse = await User.find({isAtive : false})
        // console.log(getUserofActiveFalse);
        //query by id
        // const getLastCreatedUserbyId = await User.findById(newUser._id)
        // console.log(getLastCreatedUserbyId);

        //selective
        // const selectedFields = await User.find().select('name email -_id')
        // console.log("selectedFileds:", selectedFields);
        //limited
        // const limitedUsers = await User.find().limit(5).skip(1);
        // console.log(limitedUsers);

        //sorting
        // const sortedUsers = await User.find().sort({age: -1})
        // console.log(sortedUsers);


        //counting 
        // const countDocs = await User.countDocuments({isAtive: false})
        // console.log(countDocs);

        // //delete object from mongodb
        // const deletedUser = await User.findByIdAndDelete(newUser._id)
        // console.log("deleted user:", deletedUser);

        //update user
        const UpdatedUser = await User.findByIdAndUpdate(newUser._id, {
            $set: {age:100}, $push:{tags: 'updated'}
        }, {new: true})
        console.log(UpdatedUser);

    } catch (error) {
        console.log('error', error);
        
    }
    finally{
        await mongoose.connection.close()
    }
}

runQueryExamples();
