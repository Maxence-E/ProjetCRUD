const express = require('express');
const route = express.Router()

const services = require('../services/render');
const advertisement = require('../controller/advertisement');
const adduser = require('../controller/adduser');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/userList', services.userRoutes);
route.get('/', services.advRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-user', services.add_user)

route.get('/add-advertisement', services.add_adv)

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/update-user', services.update_user)

// API
route.get('/api/users', adduser.find);
route.get('/api/advertisements', advertisement.find);
route.post('/api/users', adduser.create);
route.post('/api/advertisements', advertisement.create);
route.put('/api/users/:id', adduser.update);
route.delete('/api/users/:id', adduser.delete);


module.exports = route