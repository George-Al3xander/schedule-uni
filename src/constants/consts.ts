import { TLocale, TRoute } from "@/types/types";

export const routes: TRoute[] = [
    {
        title: "Current",
        path: "/",
    },
    {
        title: "Today",
        path: "/today",
    },
    {
        title: "Week",
        path: "/week",
    },
];

export const locales: TLocale[] = [
    {
        code: "en",
        name: "English",
    },
    {
        code: "uk",
        name: "Українська",
    },
];
