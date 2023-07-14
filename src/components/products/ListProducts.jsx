
import ItemList from "./ItemList";

const ListProducts = ({ products }) => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    All Products
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product, id) => (
                        <ItemList key={id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListProducts;
