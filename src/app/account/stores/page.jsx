import StoreCard from "@/components/stores/StoreCard";

const StorePage = () => {
    const stores = [
        {
            _id: 1,
            title: "Store 1",
            productsCount: 19,
        },
        {
            _id: 2,
            title: "Store 2",
            productsCount: 19,
        },
        {
            _id: 3,
            title: "Store 3",
            productsCount: 19,
        },
        {
            _id: 4,
            title: "Store 4",
            productsCount: 19,
        },
    ];

    const demoStore = {
        title: "Create Name",
        description: "Store description",
        productsCount: 0,
        isDemo: true,
    };

    return (
        <div className="">
            <h1 className="text-xl md:text-3xl font-medium md:font-bold ">
                Stores
            </h1>
            <p className="text-lg">Manage your stores</p>
            <hr /> <hr />
            <div className="flex flex-wrap gap-5 my-5 justify-start">
                {stores.map((store) => (
                    <StoreCard key={store._id} data={store} />
                ))}
                <StoreCard data={demoStore} />
            </div>
        </div>
    );
};

export default StorePage;
