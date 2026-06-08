import ProductCard from "./productCard";
import './productCard.css';

function ProductGrid(){
  const products = [
    {
        id: 1,
        name: "Classic Oversized Linen Shirt",
        price: 49.00,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600"
    },
    {
        id: 2,
        name: "Minimalist Summer Cotton Dress",
        price: 79.00,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600"
    },
    {
        id: 3,
        name: "Premium Tailored Blazer",
        price: 129.00,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600"
    },
    {
        id: 4,
        name: "Relaxed Fit Chino Trousers",
        price: 59.00,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600"
    }
  ];
  return(
    <div className="product-grid">
        {products.map((product)=>(
            <ProductCard 
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}/>
        ))}
    </div>
  );
}

export default ProductGrid;
