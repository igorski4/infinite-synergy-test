import { useDispatch } from "react-redux";
import s from "./ListItem.module.scss";
import { setUser } from "../../../shared/slices/UserSlice";

export const ListItem = ({ id, name, style }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setUser(id));
    };

    return (
        <li className={s.item} style={style} onClick={handleClick}>
            <img src="../../../public/user.svg" width={20} height={20} />
            <p>{name}</p>
        </li>
    );
};
