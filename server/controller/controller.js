var Userdb = require('../model/model');

//Create and save new user
exports.create = (req, res) => {

    //Validate Request
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty"});
        return;
    }

    //Create New User
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    //Save User in the Database
    user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some Error Occured while creating a new user"
            });
        });

}

//Retrieve and return all users / retrieve and return a single user
exports.find = (req, res) => {

}

//Update an identified user by user id
exports.update = (req, res) => {

}

//Delete a user with specified user id in the request
exports.delete = (req, res) => {

}