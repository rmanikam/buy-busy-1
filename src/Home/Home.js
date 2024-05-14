import React from "react";
import styles from "../Home/Home.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { useValue } from "../productContext";
// import ClipLoader from "react-spinners/ClipLoader";
const Home = () => {
  const {
    setSearchQuery,
    searchQuery,
    priceRange,
    setPriceRange,
    handleCategoryChange,
    products,
    selectedCategories,
    filteredProducts,
  } = useValue();

  console.log("filters", filteredProducts);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   if (loading) {
  //     return (
  //       <ClipLoader
  //         color={"blue"}
  //         loading={loading}
  //         size={150}
  //         aria-label="Loading Spinner"
  //         data-testid="loader"
  //       />
  //     );
  //   }
  //   setLoading(false);
  // }, []);

  //
  return (
    <>
      <div className={styles.inputContainer}>
        <input
          placeholder="Search By Name"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className={styles.outerContainer}>
        <div className={styles.filterComponent}>
          <div className={styles.filterContainer}>
            <h1 className={styles.filter}>Filter</h1>
          </div>
          <div className={styles.priceContainer}>
            <h4 className={styles.price}>Price: {priceRange[1]} </h4>
          </div>
          <div className={styles.input}>
            <input
              type="range"
              onChange={(e) =>
                setPriceRange((prev) => (prev = [0, Number(e.target.value)]))
              }
              min={1}
              max={1000}
              step={1}
              className={styles.rangeInput}
            ></input>
          </div>
          <div className={styles.categoryContainer}>
            <h1 className={styles.category}> Category</h1>
          </div>
          <div className={styles.checkboxContainer}>
            <div className={styles.menClothing}>
              <input
                type="checkbox"
                id="menClothing"
                name="menClothing"
                value="men's clothing"
                onChange={(e) => handleCategoryChange(e.target.value)}
              />
              <label htmlFor="menClothing"> Men's Clothing</label>
            </div>
            <div className={styles.womanClothing}>
              <input
                type="checkbox"
                id="womenClothing"
                name="womenClothing"
                value="women's clothing"
                onChange={(e) => handleCategoryChange(e.target.value)}
              />

              <label htmlFor="womenClothing"> Women's Clothing</label>
            </div>
            <div className={styles.jewelery}>
              <input
                type="checkbox"
                id="jewelery"
                name="jewelery"
                value="jewelery"
                onChange={(e) => handleCategoryChange(e.target.value)}
              />
              <label htmlFor="jewelery"> Jewelery</label>
            </div>
            <div className={styles.electronics}>
              <input
                type="checkbox"
                id="electronics"
                name="electronics"
                value="electronics"
                onChange={(e) => handleCategoryChange(e.target.value)}
              />
              <label htmlFor="electronics"> Electronics</label>
            </div>
          </div>
        </div>
        {searchQuery ||
        priceRange[0] !== 1 ||
        priceRange[1] !== 1 ||
        selectedCategories.length !== 0
          ? filteredProducts.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              );
            })
          : products.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              );
            })}
      </div>
    </>
  );
};

export default Home;
