"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const ProfilePage = () => {
    const name = "null";
    const [user, setUser] = useState(null);

    const getUserData = async () => {
        const {data, error} = await axios.get("/api/account");

        if (error || !data.user) {
            toast.error("Session expired");
            onLogout();
        } else {
            setUser(data.user);
        }
    };

    // const onLogout = async (e) => {
    //     if(e) e.preventDefault();

    //     try {
    //         const { data, error } = await axios.get("/api/auth/logout");

    //         if (data) {
    //             router.push("/auth/login");
    //             toast.success("Logout Success");
    //         }
    //         if (error) {
    //             console.log("Error page ", error);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         toast.error(error.message);
    //     }
    // };

    useEffect(() => {
        getUserData();
    }, [name]);

    return (
        <div>
            <h1>Hey welcome {user?.name}</h1>
        </div>
    );
};

export default ProfilePage;
