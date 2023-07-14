import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";

const AppLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen mx-auto">
            <Toaster />
            <Header />
            <main className=" max-w-[95%] md:max-w-[90%] my-2 flex-grow mx-auto w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default AppLayout;
