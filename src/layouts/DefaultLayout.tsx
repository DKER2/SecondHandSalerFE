import Header from "./Header.tsx";
import React from "react";

function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}
export default DefaultLayout;