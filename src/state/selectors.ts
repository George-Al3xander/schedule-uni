import { $schedule } from "@/state/atoms.ts";
import { TUniClass } from "@/types/types.ts";
import dayjs from "dayjs";
import { selector } from "recoil";

export const $todaySchedule = selector<TUniClass[] | null>({
    key: "today_schedule",
    get: ({ get }) => {
        const schedule = get($schedule);

        const todayDayNumber: number = dayjs().day();
        const todaySchedule = schedule.weekDays[todayDayNumber];

        if (todaySchedule.length > 0)
            return [...todaySchedule].sort(
                (a, b) => a.startTime.hour - b.startTime.hour,
            );
        else return null;
    },
});
