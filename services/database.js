"use strict";
var mongoose = require("mongoose");
exports.mongoose = mongoose;
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1/typescript_mongoose");
