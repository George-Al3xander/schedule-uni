import { FC, ReactNode } from "react";

import { createRouter, RouterProvider } from "@tanstack/react-router";

import { RecoilRoot } from "recoil";
import "../i18n";
import { routeTree } from "../routeTree.gen.ts";
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

const Providers: FC<{ children?: ReactNode }> = () => (
    <RecoilRoot>
        <RouterProvider router={router} />
    </RecoilRoot>
);
export default Providers;
