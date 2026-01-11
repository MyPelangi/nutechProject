const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();
    
        res.json({
            message: 'GET users success',
            data: data
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const createNewUser = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'CREATE new users success',
        data: req.body
    })
}

const updateUser = (req, res) => {
    const {id} = req.params;
    console.log("id user:",id);
    res.json({
        message: 'user updated succesfully',
        data: req.body
    })
}

const deleteUser = (req, res) => {
    const {id} = req.params;
    console.log("id user:",id);
    res.json({
        message: 'user deleted succesfully',
        data: {
            id: id,
            name: "pandji",
            email: "pelangi@gmail.com"
        }
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}