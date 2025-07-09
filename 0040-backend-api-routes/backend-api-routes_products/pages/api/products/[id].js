import { getProductById } from "@/services/productServices.js";

export default function handler(req, res) {
  const product = getProductById(req.query.id);
    
  product
    ? res.status(200).json(product)
    : res.status(404).json({ body: "page not found" });
}
