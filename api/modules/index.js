const express = require("express");
const app = express();

require("./authentication")(app);
require("./users")(app);
require("./posts")(app);
require("./tags")(app);
require("./subjects")(app);
require("./answers")(app);
module.exports=app;