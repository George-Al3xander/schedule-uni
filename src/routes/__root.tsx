import * as React from "react";

import NavBar from "@/components/nav-bar";
import LanguageSwitcher from "@/containers/language-switcher.tsx";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
    return (
        <React.Fragment>
            <div className="flex w-full justify-between gap-4 border-b-2 border-black p-4">
                <NavBar />
                <LanguageSwitcher />
            </div>
            <div className="w-full">
                <div className="mx-auto w-[min(90%,40rem)] py-4">
                    <Outlet />
                </div>
            </div>
            <TanStackRouterDevtools />
        </React.Fragment>
    );
}
