import { Input } from "../../../shared/ui/input";
import s from "./InputField.module.scss";

export const InputField = ({ fieldName, ...rest }) => {
    return (
        <div className={s.wrapper}>
            <p>{fieldName}</p>
            <Input {...rest} />
        </div>
    );
};
