import "../globals.css";
import Searchbar from "@/components/searchbar/searchbar";
import Sidebar from "@/components/sidebar/sidebar";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="flex flex-col h-[100vh]">
                <Searchbar />
                <div className="flex flex-row">
                    <Sidebar />
                    {children}
                </div>
            </body>
        </html>
    );
}
