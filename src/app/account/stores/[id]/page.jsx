import BreadCrumb from "@/components/BreadCrumb";
import StoreProductsList from "@/components/stores/ProductsList";
import UpdateStoreForm from "@/components/stores/UpdateStoreForm";
import StoreOrdersList from "@/components/stores/orders/StoreOrdersList";
import React from "react";

const StoreDetailsPage = ({ params }) => {
    const { id } = params;
    console.log(id);

    const links = [
        {
            title: "Home",
            url: "/",
        },
        {
            title: "Account",
            url: "/account/profile",
        },
        {
            title: "Stores",
            url: "/account/stores",
        },
        {
            title: "storename",
            url: `/account/stores/${id}`,
        },
    ];

    return (
        <div>
            <BreadCrumb links={links} />
            <StoreProductsList />
            <StoreOrdersList />
            <UpdateStoreForm />
        </div>
    );
};

export default StoreDetailsPage;
