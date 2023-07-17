"use client";

import FeaturesSeaction from "@/components/home/Features";
import HeroSection from "@/components/home/Hero";
import TrustedBrands from "@/components/home/TrustedBrands";
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
            <HeroSection />;
            <TrustedBrands />
            <FeaturesSeaction />
        </>
    );
}
