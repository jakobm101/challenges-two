import { getAllProducts } from "@/services/productServices";

export default function handler(req, res){
    console.log('⭐️ api online');
    
    res.status('200').json({body:"hi"})
}