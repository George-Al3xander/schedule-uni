import { convertExtendedDateToDayjs, isDateBetween } from "@/lib/utils.ts";
import dayjs from "dayjs";

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
