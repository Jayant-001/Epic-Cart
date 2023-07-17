"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const AppLayout = ({ children }) => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <div className="flex flex-col min-h-screen mx-auto">
                <Toaster />
                <Header />
                <main className=" max-w-[95%] md:max-w-[90%] my-2 flex-grow mx-auto w-full">
                    {children}
                </main>
                <Footer />
            </div>
        </QueryClientProvider>
    );
};

export default AppLayout;
