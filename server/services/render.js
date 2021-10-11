const axios = require('axios');
//const localStorage = require('localstorage');

exports.userRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
      //  try {localStorage.get('user'); } 
       // catch (error) {
       //     console.log(error);
        //}
           // console.log("quelque chose"+ localStorage.get('user') + " tata ");
        //let storage = localStorage.get('user');
        //let token = '';
        //if (storage != null) {
        //    token = JSON.parse(storage);
            res.render('userList', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.login = (req, res) =>{
    res.render('login');
}

exports.signup = (req, res) =>{
    res.render('signup');
}

exports.add_user = (req, res) =>{
    res.render('add_user');
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

exports.advList = (req, res) => {
    // Make a get request to /api/advertisements
    axios.get('http://localhost:3000/api/advertisements')
        .then(function(response){
            res.render('advList', { advertisements : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.add_adv = (req, res) =>{
    res.render('add_adv');
}


exports.update_advertisement = (req, res) =>{
    axios.get('http://localhost:3000/api/advertisements', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_advertisement", { advertisement : advertisement.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

