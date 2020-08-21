const express = require("express");
const app = express();

require("./users")(app);
require("./tags")(app);
require("./subjects")(app);
// require("./responses")(app);
// require("./roles")(app);
module.exports=app;