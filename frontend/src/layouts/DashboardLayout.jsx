import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-[#F1F5F9] text-[#0F172A]">

    <div className="hidden min-[800px]:block">
        <Sidebar />
    </div>

    <div className="flex-1 flex flex-col min-w-0">
        <Navbar />

        <main className="flex-1 p-6 md:p-8">
            {children}
        </main>
    </div>

</div>
    );
};

export default DashboardLayout;