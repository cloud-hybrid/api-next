const API = require("express");

const Application = API();

Application.set("x-powered-by", false);

module.exports = Application;
