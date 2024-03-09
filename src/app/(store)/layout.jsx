import "../globals.css";
import Searchbar from "@/components/searchbar/searchbar";
import Sidebar from "@/components/sidebar/sidebar";

export default function RootLayout({ children }) {
    return (
        <>
            <div className="flex flex-row pb-12">
                <Sidebar />
                {children}
            </div>
        </>
    );
}
