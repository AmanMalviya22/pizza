const Order = require('../../../models/order')

function statusController() {
    return {
        update(req, res) {
          Order.updateOne({ _id: req.body.orderId }, { status: req.body.status })
          .then((data) => {
              res.redirect("/admin/orders");
          })
          .catch((err) => {
              res.redirect('/admin/orders'); // Handle error
          });
        }
    }
}

module.exports = statusController