import clsx from 'clsx';
import s from './Input.module.scss'

export const Input = ({ className, register, name, rules, ...rest }) => {
    return (
        <input type="text" className={clsx(s.input, className)} {...(register && register(name, rules))} {...rest} />
    );
};
