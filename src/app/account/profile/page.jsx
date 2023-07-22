"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";

const ProfilePage = () => {
    const [user, setUser] = useState({
        name: "test user",
        email: "test3@gmail.com",
        contact: 8943023912,
        password: "********",
        image: "profile image",
    });

    const styles = {
        profileIcon: "w-10 h-10 text-lg",
        inputBox: "border",
        saveBtn:
            "px-4 py-2 bg-gray-600 text-slate-200 active:bg-gray-800 mx-auto flex rounded-lg shadow",
        dataBox: "space-y-2",
        heading: "text-lg font-medium",
    };

    const onDataSave = async (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const { data, error, isError, isLoading } = useQuery({
        queryKey: [],
        queryFn: async () => {
            return await axios.get("/api/account");
        },
    });

    if (isLoading) {
        return <h1 className="text-center">Loading...</h1>;
    }

    if (isError) return <h1 className="text-center">{error.message}</h1>;

    console.log(data.data.user);

    return (
        <div className="space-y-5 p-5">
            <div className={styles.dataBox}>
                <h1 className={styles.heading}>Profile photo</h1>
                {/* <Image src={user.image} alt="Profile photo" width={30} height={30} /> */}
                <BiSolidUserCircle className={styles.profileIcon} />
            </div>
            <div className={styles.dataBox}>
                <h1 className={styles.heading}>Name</h1>
                <input
                    onChange={handleChange}
                    type="text"
                    className={styles.inputBox}
                    value={data.data.user.name}
                />
            </div>
            <div className={styles.dataBox}>
                <h1 className={styles.heading}>Email</h1>
                <input
                    type="text"
                    onChange={handleChange}
                    className={styles.inputBox}
                    value={data.data.user.email}
                />
            </div>
            <div className={styles.dataBox}>
                <h1 className={styles.heading}>Contact</h1>
                <input
                    onChange={handleChange}
                    type="Contact"
                    className={styles.inputBox}
                    value={user.contact}
                />
            </div>
            <div className={styles.dataBox}>
                <h1 className={styles.heading}>Password</h1>
                <input
                    onChange={handleChange}
                    type="text"
                    className={styles.inputBox}
                    value={user.password}
                />
            </div>
            <button onClick={onDataSave} className={styles.saveBtn}>
                Save
            </button>
        </div>
    );
};

export default ProfilePage;
