import schedule from "@/mocks/mock-schedule.json";
import { TSchedule } from "@/types/types.ts";
import { atom } from "recoil";
export const $schedule = atom<TSchedule>({
    key: "schedule_main_atom",
    default: schedule as TSchedule,
});
