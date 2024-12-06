import { Dayjs } from "dayjs";

export type TRoute = {
    path: string;
    title: string;
};

export type TLocale = {
    code: string;
    name: string;
};

export type TUniClassType = "lecture" | "practice";

export type TTime = {
    hour: number;
    minute: number;
};

export type TUniClass = {
    name: string;
    classType: TUniClassType;
    startTime: TTime;
    isNumerator?: boolean;
};

export type TSchedule = {
    classDurationMinutes: number;
    weekDays: TUniClass[][];
};

export type TExtendedDate = Dayjs | Date | string;

export type TUniClassUtilBaseParams = {
    classDuration: number;
    currentTime: TExtendedDate;
};
