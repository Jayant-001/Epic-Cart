import ItemList from "./ItemList";

const ListProducts = ({ products }) => {
    return (
        <div className="mx-auto w-full py-4 sm:py-6 lg:max-w-7xl ">
            <div className="grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product, id) => (
                    <ItemList key={id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ListProducts;
