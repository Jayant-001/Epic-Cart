"use client";
import { BiUserCircle } from "react-icons/bi";
import { BsCartCheck } from "react-icons/bs";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

function DropDown() {
    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });

    return (
        <div className="menu-container text-black" ref={menuRef}>
            <div
                className="menu-trigger"
                onClick={() => {
                    setOpen(!open);
                }}
            >
                <BiUserCircle className="menu-trigger-icon" />
            </div>

            <div
                className={`dropdown-menu border ${
                    open ? "active" : "inactive"
                }`}
            >
                <h3>Jayant</h3>
                <ul>
                    <Link href="/account" className="dropdownItem">
                        <BsCartCheck className="dropdown-item-img" />
                        <p> My Profile </p>
                    </Link>
                    <Link href="/cart" className="dropdownItem">
                        <BsCartCheck className="dropdown-item-img" />
                        <p> Cart </p>
                    </Link>
                    <Link href="/settings" className="dropdownItem">
                        <BsCartCheck className="dropdown-item-img" />
                        <p> Settings </p>
                    </Link>
                    <Link href="/" className="dropdownItem">
                        <BsCartCheck className="dropdown-item-img" />
                        <p> Logout </p>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

function DropdownItem({ title, icon }) {
    return (
        <li className="dropdownItem">
            {/* <img src=""></img> */}
            <BsCartCheck />
            <a> {text} </a>
        </li>
    );
}

export default DropDown;
