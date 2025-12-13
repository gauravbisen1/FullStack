import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;
import cors from "cors";
app.use(cors({
    origin: "*",
}));

app.get("/api/products", (req, res) => {
    const products = [
        {
          id: 1,
          name: "Wireless Headphones",
          price: 1299,
          image: "https://images.pexels.com/photos/159928/headphones-music-listen-sound-159928.jpeg"  // from Pexels :contentReference[oaicite:0]{index=0}
        },
        {
          id: 2,
          name: "Smart Watch",
          price: 2499,
          image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg"  // a smartwatch-style photo :contentReference[oaicite:1]{index=1}
        },
        {
          id: 3,
          name: "Bluetooth Speaker",
          price: 1499,
          image: "https://images.pexels.com/photos/34442/pexels-photo.jpg"  // speaker-setup image :contentReference[oaicite:2]{index=2}
        },
        {
          id: 4,
          name: "Gaming Mouse",
          price: 799,
          image: "https://images.pexels.com/photos/19012038/pexels-photo-19012038.jpeg"  // close-up of a gaming mouse :contentReference[oaicite:3]{index=3}
        },
        {
          id: 5,
          name: "Laptop Backpack",
          price: 999,
          image: "https://images.pexels.com/photos/9407364/pexels-photo-9407364.jpeg"  // backpack with laptop :contentReference[oaicite:4]{index=4}
        }
    ];
    //http://localhost:3000/api/products?search=Watch 
    if(req.query.search){
        const filterProducts = products.filter(product =>
                product.name.includes(req.query.search)
        )
        res.send(filterProducts);
        return;                                     
    }
    res.send(products);                              
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});