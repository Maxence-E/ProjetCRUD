const axios = require('axios');


exports.userRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('userList', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.advRoutes = (req, res) => {
    // Make a get request to /api/advertisements
    axios.get('http://localhost:3000/api/advertisements')
        .then(function(response){
            res.render('index', { advertisements : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.add_adv = (req, res) =>{
    res.render('add_adv');
}

exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}