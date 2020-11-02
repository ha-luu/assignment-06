const express = require("express");
const bodyParser = require("body-parser");
const userRoute = require("./route/customers");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.get("/api/customers", userRoute.getAllCustomers);
app.get("/api/customers/:id", userRoute.getCustomer);
app.post("/api/customers", userRoute.addCustomer);
app.delete("/api/customers/:id", userRoute.deleteCustomer);
app.put("/api/customers/:id", userRoute.updateCustomer);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
