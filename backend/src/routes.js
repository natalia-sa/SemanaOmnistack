const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload')

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashBoardController = require('./controllers/DashBoardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);


routes.post('/sessions', SessionController.store);

routes.get('/dashboard', DashBoardController.show);

routes.get('/spots', SpotController.index);

routes.post('/spots',upload.single('thumbnail'), SpotController.store)

routes.post('/spots/:spot_id/bookings',BookingController.store);

module.exports = routes;