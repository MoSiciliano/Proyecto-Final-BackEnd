import { Router } from "express";
import CartManager from "../Classes/CartManager.js";
const cartManager = new CartManager();
const router = Router();
router.post("/", async (req, res) => {
  const newCart = await cartManager.addCart();
  console.log("newCart", newCart);
  try {
    return res.status(201).json({
      data: newCart,
      message: `New cart with id: ${newCart} was created successfully`,
    });
  } catch (error) {
    console.error("Error en la creación del carrito:", error);
    res.status(500).json({
      status: "error",
      message: "Se produjo un error interno al crear el carrito.",
    });
  }
});
// router.post();
// router.get();
export default router;
