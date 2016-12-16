var mongoose = require('mongoose');

var carData = new mongoose.Schema({
	make: String,
	model: String,
	year: Number,
	mpghwy: Number,
	mpgcty: Number,
	mpgcmb: Number
});

mongoose.model('VehicleData', carData, 'VehicleData');