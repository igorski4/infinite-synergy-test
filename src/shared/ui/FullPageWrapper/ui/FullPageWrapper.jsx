import s from './FullPageWrapper.module.scss'

export const FullPageWrapper = ({ children }) => {
    return <div className={s.wrapper}>{children}</div>;
};
