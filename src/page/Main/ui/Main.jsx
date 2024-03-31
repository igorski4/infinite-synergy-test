import { useSelector } from "react-redux";
import { UserCard } from "../../../widgets/UserCard";
import { UsersList } from "../../../widgets/UsersList";
import s from "./Main.module.scss";

export const Main = () => {
    const userId = useSelector((state) => state.userId.value);

    return (
        <div className={s.wrapper}>
            <UsersList />
            {userId && <UserCard />}
        </div>
    );
};
