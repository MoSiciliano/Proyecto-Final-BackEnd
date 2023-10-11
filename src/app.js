import express from "express";

import routerProducts from "./router/products.router.js";
import routerCarts from "./router/cart.router.js";

const app = express();

const PORT = 8080;

app.use(express.json()); //midddleware incorporados
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const welcome = `<body style="background-color: aqua; display:flex; justify-content: center;align-items: center;">
    <h1 style='color:rgb(155, 85, 185);text-align: center;'>Welcome to my ecommerce</h1>
    </body>`;
  res.send(welcome);
});
app.use("/api/products", routerProducts);
app.use("/api/carts", routerCarts);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
