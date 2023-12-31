import Product from "../../models/Product.js";
import connectDb from "../../middleware/mongoose.js";
import { useEffect } from "react";
import { addStripePrice } from "../../utils/stripe.js";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      console.log(req.body);
      const stripePrice = await addStripePrice(
        req.body.title,
        parseFloat(req.body.price) * 100
      );
      let p = new Product({
        title: req.body.title,
        slug: req.body.slug,
        desc: req.body.desc,
        image: req.body.image,
        category: req.body.category,
        price: req.body.price,
        stripeId: stripePrice.id,
      });
      const data = await p.save();
      console.log(data);

      res.status(200).json({ Products: req.body });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(400).json({ error: "Invalid request" });
  }
};

export default connectDb(handler);
