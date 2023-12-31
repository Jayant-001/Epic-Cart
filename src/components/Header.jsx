"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";

const Header = () => {
    const ref = useRef();
    const [menuState, setMenuState] = useState(false);

    const navigation = [
        { title: "Products", path: "/products" },
        { title: "Stores", path: "/stores" },
        { title: "Men", path: "/products?category=men" },
        { title: "Women", path: "/products?category=women" },
    ];

    const keyDownHandler = (event) => {
        if (event.ctrlKey && event.key === "/") {
            ref.current.focus();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", keyDownHandler);
    });

    return (
        <nav className="bg-white border-b shadow sticky top-0 z-10">
            <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
                <div className="flex-none lg:flex-initial">
                    <Link href="/">
                        <img
                            src="https://www.floatui.com/logo.svg"
                            width={120}
                            height={50}
                            alt="Epic Store logo"
                            title="Epic Store"
                        />
                    </Link>
                </div>
                <div className="flex-1 flex items-center justify-between">
                    <div
                        className={`bg-white absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${
                            menuState ? "" : "hidden"
                        }`}
                    >
                        <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
                            {navigation.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    <Link
                                        onClick={() => setMenuState(!menuState)}
                                        href={item.path}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <ProfileDropDown
                            menuState={menuState}
                            setMenuState={setMenuState}
                            class="mt-5 pt-5 border-t lg:hidden"
                        />
                    </div>
                    <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
                        <form className="flex items-center space-x-2 border rounded-md p-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 flex-none text-gray-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                            <input
                                ref={ref}
                                className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                                type="text"
                                placeholder="Search (Ctrl + '/' to focus)"
                            />
                        </form>
                        <ProfileDropDown
                            menuState={menuState}
                            setMenuState={setMenuState}
                            class="hidden lg:block"
                        />
                        <button
                            className="outline-none text-gray-400 block lg:hidden"
                            onClick={() => setMenuState(!menuState)}
                        >
                            {menuState ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

// Profile Dropdown
const ProfileDropDown = (props) => {
    const [state, setState] = useState(false);
    const profileRef = useRef();
    const router = useRouter();

    const navigation = [
        { title: "Account", path: "/account" },
        { title: "Settings", path: "/account/settings" },
        { title: "Cart", path: "/account/cart" },
        { title: "Log out", path: "/auth/login" },
    ];

    const onSignout = async () => {
        const { data, error } = await axios.get("/api/auth/logout");
        if (error) {
            console.log(error);
            toast.error("Something went wrong");
            return;
        }
        props.setMenuState(!props.menuState);
        toast.success("Logout successful");
        router.push("/auth/login");
    };

    useEffect(() => {
        const handleDropDown = (e) => {
            if (!profileRef.current.contains(e.target)) setState(false);
        };
        document.addEventListener("click", handleDropDown);
    }, []);

    return (
        <div className={`relative ${props.class}`}>
            <div className="flex items-center space-x-4">
                <button
                    ref={profileRef}
                    className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
                    onClick={() => setState(!state)}
                >
                    <img
                        src="https://randomuser.me/api/portraits/men/46.jpg"
                        className="w-full h-full rounded-full"
                    />
                </button>
                <div className="lg:hidden">
                    <span className="block">User name</span>
                    <span className="block text-sm text-gray-500">
                        user@gmail.com
                    </span>
                </div>
            </div>
            <ul
                className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
                    state ? "" : "lg:hidden"
                }`}
            >
                <li>
                    <Link
                        onClick={() => props.setMenuState(!props.menuState)}
                        className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
                        href="/account"
                    >
                        Account
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => props.setMenuState(!props.menuState)}
                        className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
                        href="/account/cart"
                    >
                        Cart
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => props.setMenuState(!props.menuState)}
                        className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
                        href="/account/settings"
                    >
                        Settings
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={onSignout}
                        className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
                        href=""
                    >
                        Sign out
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;

// https://www.youtube.com/watch?v=KROfo7vuIGY
