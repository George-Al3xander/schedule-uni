import { $todaySchedule } from "@/state/selectors.ts";
import dayjs from "dayjs";
import { useRecoilValue } from "recoil";

const TodayClasses = () => {
    const classes = useRecoilValue($todaySchedule);

    if (!classes) return <div>Today&#39;s day off!</div>;

    return (
        <ul>
            {classes.map(({ name, classType, startTime }) => (
                <li
                    className="flex flex-col gap-4 border-b-2 border-black p-4"
                    key={name}
                >
                    <p className="text-lg font-bold">{name}</p>
                    <time dateTime={dayjs().toISOString()}>
                        <span>
                            {startTime.hour}:{startTime.minute}
                        </span>
                    </time>
                    <small>{classType}</small>
                </li>
            ))}
        </ul>
    );
};

export default TodayClasses;
