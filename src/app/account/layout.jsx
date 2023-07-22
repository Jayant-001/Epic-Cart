import StoreNavbar from "@/components/stores/Navbar";

const layout = ({ children }) => {
    return (
        <div className="flex flex-col md:flex-row gap-10 mt-5 ">
            <StoreNavbar />
            <div className="flex-grow">{children}</div>
        </div>
    );
};

export default layout;
