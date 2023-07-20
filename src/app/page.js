"use client";

import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FeaturesSeaction from "@/components/home/Features";
import HeroSection from "@/components/home/Hero";
import SellSection from "@/components/home/SellProducts";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const verifyUser = async () => {
    try {
        const { error } = await axios.get(`/api/auth/verify`);
        // console.log(error);
        if (error) return false;
    } catch (error) {
        return false;
    }
    return true;
};

export default function Home() {
    useEffect(() => {
        async function gett() {
            const isVerified = await verifyUser();

            if (!isVerified) {
                toast.error("Session Expired");
            }
        }
        gett();
    }, []);

    return (
        <>
            <HeroSection />
            <Categories />
            <SellSection />
            <FeaturedProducts />
            <FeaturesSeaction />
        </>
    );
}
