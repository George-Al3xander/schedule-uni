import { locales } from "@/constants/consts.ts";
import { cn } from "@/lib/utils.ts";
import { TLocale } from "@/types/types.ts";
import { useTranslation } from "react-i18next";

const LocaleButton = ({ name, code }: TLocale) => {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;

    const handleClick = () => i18n.changeLanguage(code);

    return (
        <li>
            <button
                className={cn("cursor-pointer", {
                    "cursor-none opacity-60": currentLocale === code,
                })}
                onClick={handleClick}
            >
                {name}
            </button>
        </li>
    );
};

const LanguageSwitcher = () => {
    return (
        <ul>
            {locales.map((locale) => (
                <LocaleButton key={locale.code} {...locale} />
            ))}
        </ul>
    );
};

export default LanguageSwitcher;
