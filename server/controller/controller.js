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
            // res.send(data)
            res.redirect('/add-user')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some Error Occured while creating a new user"
            });
        });

}

//Retrieve and return all users / retrieve and return a single user
exports.find = (req, res) => {
    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message: "User with id " + id + " does not exist"})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Error retrieving user with id " + id
            });
        })
    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err =>{
                res.status(500).send({
                    message: err.message || "Some Error Occured while retrieving users"
                });
            })
    }
}

//Update an identified user by user id
exports.update = (req, res) => {
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

//Delete a user with specified user id in the request
exports.delete = (req, res) => {
    
}