import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      response.status(404).json({ status: "Not Found" });
      return;
    }

    response.status(200).json(product);
    return;
  }

  if (request.method === "PUT") {
    console.log("⭐️ putting", request.body);
    try {
      await Product.findByIdAndUpdate(id, request.body);
      response.status(200).json();
      return;
    } catch (e) {
      response.status(404).json({ error: e });
      return;
    }
  }

  if (request.method === "DELETE") {
    console.log("💣 deleting", id);
    try {
      await Product.findByIdAndDelete(id);
      response.status(200).json({ status: "deletion completion" });
      return;
    } catch (error) {
      response.status(404).json({ error: error });
    }
  }

  response.status(405).json({ status: "Method not allowed." });
}
