import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/today")({
    component: RouteComponent,
});

function RouteComponent() {
    return <div></div>;
}