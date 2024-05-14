import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const productContext = createContext();

const useValue = () => {
  const value = useContext(productContext);
  return value;
};

const CustomProductContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartNew, setCartNew] = useState([]);
  const [total, setTotal] = useState(0);
  const [priceRange, setPriceRange] = useState([1, 1000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  // console.log("product", products);
  const addToCard = (prod) => {
    const index = cart.findIndex((item) => item.id === prod.id);

    if (index === -1) {
      setCart([...cart, { ...prod, qty: 1 }]);
      setTotal(total + prod.price);
      toast.success("Product added successfully");
    } else {
      cart[index].qty++;
      setCart([...cart]);
      setTotal(total + cart[index].price);
      toast.success("Increase Product Count");
    }
  };

  const removeFromCard = (id) => {
    const index = cart?.findIndex((item) => item.id === id);
    if (index !== -1) {
      if (cart[index].qty >= 1) {
        cart[index].qty--;
        if (cart[index].qty === 0) {
          cart.splice(index, 1);
        }
      }

      setCart([...cart]);
    }
  };
  const removeCartProduct = (id) => {
    const index = cart?.findIndex((item) => item.id === id);
    if (index !== -1) {
      cart.splice(index, 1);
    }

    setCart([...cart]);
    setCartNew(cart);
    toast.success("Product Removed successfully!");
  };

  const purchaseItems = () => {
    setCartNew(cart);
    navigate("/order");
    setCart([]);
  };

  useEffect(() => {
    const updatedProducts = products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesPriceRange =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      return matchesSearch && matchesPriceRange && matchesCategory && product;
    });

    setFilteredProducts(updatedProducts);
  }, [products, searchQuery, priceRange, selectedCategories]);

  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((categoryItem) => categoryItem !== category) // Remove category if already selected
      : [...selectedCategories, category]; // Add category if not selected
    setSelectedCategories(updatedCategories);
  };

  return (
    <productContext.Provider
      value={{
        cart,
        addToCard,
        removeFromCard,
        setCart,
        removeCartProduct,
        total,
        purchaseItems,
        cartNew,
        priceRange,
        setPriceRange,
        handleCategoryChange,
        filteredProducts,
        setSearchQuery,
        searchQuery,
        products,
        selectedCategories,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export { useValue };

export default CustomProductContext;
