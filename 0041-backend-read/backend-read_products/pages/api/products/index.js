import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const productss = await Product.find();
    console.log("💿 Product", productss[0]);

    return response.status(200).json(productss);
  }
}
