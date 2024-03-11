import "../globals.css";
import Navbar from "@/components/navbar/navbar";

export default function RootLayout({ children }) {
    return (
        <>
            <div className="flex flex-row pb-12">
                <div className="absolute top-0 left-0 right-0 z-10 w-full flex justify-center">
                    <div className="w-[90%]">
                        <Navbar />
                    </div>
                </div>
                {children}
            </div>
        </>
    );
}
