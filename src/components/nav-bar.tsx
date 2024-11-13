import { routes } from "@/constants/consts.ts";
import { Link } from "@tanstack/react-router";

const NavBar = () => (
    <div className="flex gap-2 p-2">
        {routes.map(({ title, path }) => (
            <Link key={path} to={path} className="[&.active]:font-bold">
                {title}
            </Link>
        ))}
    </div>
);

export default NavBar;
