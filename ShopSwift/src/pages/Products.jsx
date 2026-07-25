import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import SortDropdown from "../components/SortDropdown";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold mb-10">
        Explore Products
      </h1>

      {/* Filters */}

      <div className="grid lg:grid-cols-3 gap-5 mb-12">

        <SearchBar />

        <CategoryFilter />

        <SortDropdown />

      </div>

      {/* Products */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

      </div>

    </div>
  );
};

export default Products;