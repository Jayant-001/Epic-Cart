"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { BsCardImage } from "react-icons/bs";

const StoreProductAddPage = ({ params }) => {
    const { storeId } = params;
    const queryClient = useQueryClient();

    const router = useRouter();
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
        storeId: storeId,
        category: "other",
        address: "",
        images: [],
    });

    const options = [
        "Others",
        "Electronics",
        "Accessories",
        "Beauty",
        "Men",
        "Women",
        "Kids",
    ];

    const addProductMutation = useMutation({
        mutationFn: async (product) => {
            return await axios.post(`/api/account/stores/${storeId}/products`, product);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["account", "stores", "products"]);
            setProduct({
                name: "",
                description: "",
                price: "",
                stock: "",
                category: "",
                address: "",
                images: [],
            });
            toast.success("Uploaded");
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const handleClear = (e) => {
        e.preventDefault();
        setProduct({
            name: "",
            description: "",
            price: "",
            stock: "",
            category: "",
            address: "",
            images: [],
        });

        toast.error("Data cleared");
    };

    const handleUpload = async (e) => {
        e.preventDefault();

        addProductMutation.mutate(product);
    };

    const handleInputChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleUpload}>
            <div className="space-y-12 max-w-3xl mx-auto">
                <div className="border-gray-900/10">
                    <h2 className="text-3xl mt-5 font-semibold leading-7 text-gray-900">
                        Product information
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        This information will be displayed publicly so be
                        careful while filling product information.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Product name
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={product.name}
                                        onChange={handleInputChange}
                                        required
                                        className="block flex-1 border-0 outline-none bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Apple iPhone 14 (128 GB) - Blue "
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="description"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                description
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={3}
                                    value={product.description}
                                    onChange={handleInputChange}
                                    placeholder="Product description"
                                    className="block w-full rounded-md outline-none border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label
                                htmlFor="price"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Price
                            </label>
                            <div className="mt-2">
                                <input
                                    type="number"
                                    name="price"
                                    value={product.price}
                                    onChange={handleInputChange}
                                    id="price"
                                    required={true}
                                    placeholder="Price"
                                    className="block w-full rounded-md border-0 py-1.5 outline-none text-gray-900 shadow-sm px-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label
                                htmlFor="stock"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Inventory
                            </label>
                            <div className="mt-2">
                                <input
                                    type="number"
                                    name="stock"
                                    value={product.stock}
                                    onChange={handleInputChange}
                                    id="stock"
                                    required={true}
                                    placeholder="Stock"
                                    className="block w-full rounded-md border-0 outline-none py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="category"
                                className="block mb-2 text-sm font-medium  "
                            >
                                Product category
                            </label>
                            <select
                                onChange={(e) => {
                                    setProduct({
                                        ...product,
                                        [e.target.name]:
                                            e.target.value.toLowerCase(),
                                    });
                                }}
                                name="category"
                                id="category"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    "
                            >
                                {options.map((option, id) => (
                                    <option key={id}>{option}</option>
                                ))}
                            </select>
                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="address"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Street address
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    value={product.address}
                                    onChange={handleInputChange}
                                    required={true}
                                    className="block w-full rounded-md border-0 outline-none px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label
                                htmlFor="cover-photo"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Product images
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    <BsCardImage
                                        className="mx-auto h-12 w-12 text-gray-300"
                                        aria-hidden="true"
                                    />
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-gray-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-gray-600 focus-within:ring-offset-2 hover:text-gray-500"
                                        >
                                            <span>Upload a file</span>
                                            <input
                                                id="file-upload"
                                                name="file-upload"
                                                type="file"
                                                className="sr-only"
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    onClick={handleClear}
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                >
                    Clear
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                >
                    {addProductMutation.isLoading ? "Loading..." : "Upload"}
                </button>
            </div>
        </form>
    );
};

export default StoreProductAddPage;

// AddProductForm
