import {
    convertExtendedDateToDayjs,
    isClassCurrent,
    isDateBetween,
} from "@/lib/utils.ts";
import { TUniClass } from "@/types/types.ts";
import dayjs, { Dayjs } from "dayjs";

describe("utils", () => {
    describe("convertExtendedDateToDayjs", () => {
        it("should convert extended date to a correct dayjs", () => {
            expect(
                convertExtendedDateToDayjs({ hour: 12, minute: 30 }).format(
                    "HH:mm",
                ),
            ).toBe("12:30");
            expect(
                convertExtendedDateToDayjs(dayjs().hour(12).minute(30)).format(
                    "HH:mm",
                ),
            ).toBe("12:30");
            expect(
                convertExtendedDateToDayjs("2011-10-05T14:48:00.000Z").format(
                    "DD/MM/YYYY",
                ),
            ).toBe("05/10/2011");
        });
    });

    describe("isDateBetween", () => {
        it("should return true", () => {
            expect(
                isDateBetween({
                    date: { hour: 12, minute: 30 },
                    startTime: { hour: 11, minute: 30 },
                    endTime: { hour: 13, minute: 30 },
                }),
            ).toBeTruthy();
            expect(
                isDateBetween({
                    date: { hour: 12, minute: 30 },
                    startTime: { hour: 12, minute: 30 },
                    endTime: { hour: 13, minute: 30 },
                }),
            ).toBeTruthy();
            expect(
                isDateBetween({
                    date: { hour: 13, minute: 30 },
                    startTime: { hour: 12, minute: 30 },
                    endTime: { hour: 13, minute: 30 },
                }),
            ).toBeTruthy();
            expect(
                isDateBetween({
                    date: dayjs().hour(12).minute(30),
                    startTime: dayjs().hour(12).minute(30),
                    endTime: dayjs().hour(13).minute(30),
                }),
            ).toBeTruthy();
        });
        it("should return false", () => {
            expect(
                isDateBetween({
                    date: { hour: 10, minute: 30 },
                    startTime: { hour: 11, minute: 30 },
                    endTime: { hour: 13, minute: 30 },
                }),
            ).toBeFalsy();
            expect(
                isDateBetween({
                    date: { hour: 15, minute: 30 },
                    startTime: { hour: 12, minute: 30 },
                    endTime: { hour: 13, minute: 30 },
                }),
            ).toBeFalsy();
            expect(
                isDateBetween({
                    date: dayjs().hour(14).minute(30),
                    startTime: dayjs().hour(12).minute(30),
                    endTime: dayjs().hour(13).minute(30),
                }),
            ).toBeFalsy();
        });
    });
});

describe("isCurrentClass", () => {
    const classMock: TUniClass = {
        name: "Necessary class",
        startTime: { hour: 12, minute: 0 },
        classType: "lecture",
    };
    const params = {
        classDuration: 80,
        uniClass: classMock,
    };

    it("should return true for current class", () => {
        const datesMock: Dayjs[] = [
            dayjs().hour(12).minute(40),
            dayjs().hour(12).minute(30),
            dayjs().hour(13).minute(20),
        ];

        for (const currentTime of datesMock) {
            expect(
                isClassCurrent({
                    currentTime: currentTime.second(0),
                    ...params,
                }),
            ).toBe(true);
        }
    });
    it("should return false for non-current class", () => {
        const datesMock: Dayjs[] = [
            dayjs().hour(10).minute(40),
            dayjs().hour(11).minute(55),
            dayjs().hour(13).minute(21),
        ];

        for (const currentTime of datesMock) {
            expect(isClassCurrent({ currentTime, ...params })).toBe(false);
        }
    });
});
