const API = require("express");

/***
 *
 * @type {*|Express}
 *
 */

const Application = API();

Application.set("x-powered-by", false);

module.exports = Application;
