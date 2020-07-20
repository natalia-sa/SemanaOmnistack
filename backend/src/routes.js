const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload')

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashBoardController = require('./controllers/DashBoardController');
const BookingController = require('./controllers/BookingController');
const ApprovalController = require('./controllers/ApprovalController');
const RejectionController = require('./controllers/RejectionController');

const routes = express.Router();
const upload = multer(uploadConfig);


routes.post('/sessions', SessionController.store);

routes.get('/dashboard', DashBoardController.show);

routes.get('/spots', SpotController.index);

routes.post('/spots',upload.single('thumbnail'),function(req,res){
    SpotController.store;
} )

routes.post('/spots/:spot_id/bookings', function(req, res) {
    BookingController.store;
});

routes.post('./bookings/:booking_id/approvals', function(req,res) {
    ApprovalController.store;
});

routes.post('./bookings/:booking_id/rejections', function(req, res) {
    RejectionController.store
});

module.exports = routes;