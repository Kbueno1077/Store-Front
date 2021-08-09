// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let basket_items = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ basket_items: basket_items });
  } else if (req.method === "DELETE") {
    const { id } = req.body;
    basket_items = basket_items.filter((item) => item.id !== id);
    res.status(200).json({ basket_items: basket_items });
  } else if (req.method === "POST") {
    const { id } = req.body;
    const product_to_basket = {
      id: id,
      title: "Title",
      descripcion:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      price: 500,
      count: 5,
      rating: 2.5,
    };

    basket_items = [...basket_items, product_to_basket];
    res.status(200).json({ basket_items: basket_items });
  }
}
