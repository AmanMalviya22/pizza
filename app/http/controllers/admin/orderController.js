const Order = require("../../../models/order");
function orderController() {
  return {
    // index(req, res) {
    //   Order.find({ status: { $ne: "completed" } }, null, {
    //     sort: { createdAt: -1 },
    //   })
    //     .populate("customerId", "-password")
    //     .exec((err, orders) => {
    //       if(req.xhr){
    //         return res.json(orders)
    //       }
    //       return res.render("admin/orders");
    //     });
    // },
    async index(req, res) {
      try {
        const orders = await Order.find({ status: { $ne: "completed" } })
          .sort({ createdAt: -1 })
          .populate("customerId", "-password");
    
        if (req.xhr) {
          res.json(orders);
        } else {
          res.render("admin/orders");
        }
      } catch (err) {
        console.error(err);
        // Handle error appropriately, e.g., send an error response
      }
    }
    
  };
}
module.exports=orderController
