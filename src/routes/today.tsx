import TodayClasses from "@/components/today-classes.tsx";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/today")({
    component: RouteComponent,
});

function RouteComponent() {
    return <TodayClasses />;
}
