import { FC, ReactNode } from "react";

import { createRouter, RouterProvider } from "@tanstack/react-router";

import "../i18n";
import { routeTree } from "../routeTree.gen.ts";
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

const Providers: FC<{ children?: ReactNode }> = () => (
    <RouterProvider router={router} />
);
export default Providers;
