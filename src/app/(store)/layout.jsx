import "../globals.css";
import Searchbar from "@/components/searchbar/searchbar";
import Sidebar from "@/components/sidebar/sidebar";

export default function RootLayout({ children }) {
    return (
        <>
            <Searchbar />
            <div className="flex flex-row">
                <Sidebar />
                {children}
            </div>
        </>
    );
}
