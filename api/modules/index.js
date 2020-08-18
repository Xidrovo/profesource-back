const express = require("express");
const app = express();

require("./users")(app);
// require("./posts")(app);
// require("./responses")(app);
// require("./roles")(app);