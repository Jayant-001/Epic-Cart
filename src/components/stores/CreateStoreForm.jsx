"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

const CreateStoreForm = () => {
    const router = useRouter();
    const queryClient = useQueryClient();

    const [store, setStore] = useState({
        title: "",
        desc: "", 
    });

    const createStoreQuery = useMutation({
        mutationKey: ["account", "stores"],
        mutationFn: async (data) => {
            return await axios.post("/api/account/stores", data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["account", "stores"]);
        },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = await createStoreQuery.mutateAsync(store);

        if (data.status === 201) {
            toast.success("Store created");
            router.back();
        } else {
            toast.error("Server is down");
        }
    };
    return (
        <form>
            <div className="mb-6">
                <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Store title
                </label>
                <input
                    type="text"
                    id="title"
                    value={store.title}
                    name="title"
                    onChange={(e) =>
                        setStore({ ...store, [e.target.name]: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Store title"
                    required
                />
            </div>
            <div className="mb-6">
                <label
                    htmlFor="desc"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    About store
                </label>
                <textarea
                    id="desc"
                    rows="4"
                    value={store.desc}
                    name="desc"
                    onChange={(e) =>
                        setStore({
                            ...store,
                            [e.target.name]: e.target.value,
                        })
                    }
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Store description"
                ></textarea>
            </div>
            <button
                type="submit"
                onClick={handleSubmit}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Create
            </button>
        </form>
    );
};

export default CreateStoreForm;
