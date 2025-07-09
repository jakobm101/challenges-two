import { getAllProducts } from "@/services/productServices.js";

export default function handler(req, res) {
  console.log("⭐️ api online");
  console.log(getAllProducts());

  res.status("200").json(getAllProducts());
}
