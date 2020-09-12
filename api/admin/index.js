const AdminController = require("./admin-controller");
module.exports = (app) =>{
    app.route("/admin/bar")
        .get(AdminController.barChart);
    app.route("/admin/linechart")
        .get(AdminController.lineChart)
    app.route("/admin/linechart2")
        .get(AdminController.lineChart2)
};