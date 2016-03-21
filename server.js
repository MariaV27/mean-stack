var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');

var PORT = process.env.PORT || 3000;
var app = express();

