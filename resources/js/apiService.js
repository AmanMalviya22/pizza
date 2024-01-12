import axios from "axios";
import Noty from "noty";
export function placeOrder(formObject){
    axios
        .post("/orders", formObject)
        .then((res) => {
          new Noty({
            type: "success",
            timeout: 1000,
            text: res.data.message,
            progressBar: false,
          }).show();
          setTimeout(() => {
            window.location.href = "/customers/orders";
          }, 1000);

          console.log(res.data)
        })
        .catch((err) => {
          new Noty({
            type: "error",
            timeout: 1000,
            text: err.res.data.message,
            progressBar: false,
          }).show();
          console.log(err);
        });
      console.log(formObject);
}