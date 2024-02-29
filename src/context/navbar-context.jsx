import { createContext, useState } from "react";

export const CategoryState = createContext();

export function NavbarContext({ children }) {
    const [active, setActive] = useState("");
    return (
        <CategoryState.Provider value={{ active, setActive }}>
            {children}
        </CategoryState.Provider>
    );
}
