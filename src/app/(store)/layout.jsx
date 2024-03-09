import "../globals.css";

export default function RootLayout({ children }) {
    return (
        <>
            <div className="flex flex-row pb-12">{children}</div>
        </>
    );
}
