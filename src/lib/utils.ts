import { TExtendedDate, TTime } from "@/types/types.ts";
import { clsx, type ClassValue } from "clsx";
import dayjs, { Dayjs } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { twMerge } from "tailwind-merge";
dayjs.extend(isBetween);
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const convertExtendedDateToDayjs = (
    date: TExtendedDate | TTime,
): Dayjs => {
    if (
        date instanceof Date ||
        dayjs.isDayjs(date) ||
        typeof date === "string"
    ) {
        return dayjs(date);
    }

    return dayjs().hour(date.hour).minute(date.minute).second(0);
};

export const isDateBetween = ({
    date,
    startTime,
    endTime,
}: {
    date: TExtendedDate | TTime;
    startTime: TExtendedDate | TTime;
    endTime: TExtendedDate | TTime;
}): boolean => {
    startTime = convertExtendedDateToDayjs(startTime);
    endTime = convertExtendedDateToDayjs(endTime);
    date = convertExtendedDateToDayjs(date);
    const isBetween = date.isBetween(startTime, endTime);
    if (isBetween) return isBetween;
    else {
        const startStr = startTime.format("HH:mm");
        const endStr = endTime.format("HH:mm");
        const dateStr = date.format("HH:mm");
        return dateStr === startStr || dateStr === endStr;
    }
};
