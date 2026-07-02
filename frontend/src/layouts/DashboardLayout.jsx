import { useState } from "react";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import { IoClose } from "react-icons/io5";

const DashboardLayout = ({ children }) => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-[#F1F5F9] text-[#0F172A]">

            {/* Desktop Sidebar */}
            <div className="hidden min-[800px]:block">
                <Sidebar />
            </div>

            {/* Mobile Sidebar */}
            {sidebarOpen && (
    <>
        {/* Overlay */}
        <div
            className="fixed inset-0 bg-black/40 z-40 min-[800px]:hidden"
            onClick={() => setSidebarOpen(false)}
        />

        {/* Drawer */}
        <div className="fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 min-[800px]:hidden">

            {/* Header */}
            <div className="flex justify-end p-4 border-b">

                <button
                    onClick={() => setSidebarOpen(false)}
                    className="text-3xl text-slate-700 hover:text-red-500"
                >
                    <IoClose />
                </button>

            </div>

            <Sidebar mobile />

        </div>
    </>
)}

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">

                <Navbar
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />

                <main className="flex-1 p-6 md:p-8">
                    {children}
                </main>

            </div>

        </div>
    );
};

export default DashboardLayout;