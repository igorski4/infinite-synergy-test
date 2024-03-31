import clsx from "clsx";
import s from "./Button.module.scss";

export const Button = ({ children, className, ...rest }) => {
    return (
        <button className={clsx(s.button, className)} {...rest}>
            {children}
        </button>
    );
};
