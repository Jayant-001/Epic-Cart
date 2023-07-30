import React from "react";

const StoreDetailsPage = ({ params }) => {
    const { storeId } = params;
    console.log(storeId);
    return <div>StoreDetailsPage {storeId}</div>;
};

export default StoreDetailsPage;
