const Order = require("../../../models/order");

function statusController() {
  return {
    update(req, res) {
      Order.updateOne({ _id: req.body.orderId }, { status: req.body.status })
        .then((data) => {
          // Emit event
          const eventEmitter = req.app.get("eventEmitter");
          eventEmitter.emit("orderUpdated", {
            id: req.body.orderId,
            status: req.body.status,
          });
          res.redirect("/admin/orders");
        })
        .catch((err) => {
          res.redirect("/admin/orders"); // Handle error
        });
    },
  };
}

module.exports = statusController;
