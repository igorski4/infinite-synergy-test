import { FixedSizeList } from "react-window";
import s from './List.module.scss'

export const List = ({ children, data, height, width, itemSize, onScroll }) => {
    return (
        <FixedSizeList
            innerElementType="ul"
            itemData={data}
            itemCount={data.length}
            itemSize={itemSize}
            height={height}
            width={width}
            className={s.list}
            onScroll={onScroll}
        >
            {children}
        </FixedSizeList>
    );
};
