import { useRef, useState } from "react";
import { List } from "../../../entities/List";
import { ListItem } from "../../../entities/ListItem";
import { useGetUsersQuery } from "../../../shared/api/api";

export const UsersList = () => {
    const [page, setPage] = useState(0);

    const { data } = useGetUsersQuery(page);
    const listRef = useRef(null);

    const handlerOnScrollList = (scroll) => {
        const tempHeight = 600 + scroll.scrollOffset;
        const height = 25 * data.length;
        if (tempHeight >= height) {
            setPage(page + 1);
        }
    };

    return (
        <div ref={listRef}>
            {data && (
                <List
                    data={data}
                    height={600}
                    width={300}
                    itemSize={25}
                    onScroll={handlerOnScrollList}
                >
                    {({ data, index, style }) => (
                        <ListItem
                            key={data[index].id}
                            id={data[index].id}
                            style={style}
                            name={data[index].name}
                        />
                    )}
                </List>
            )}
        </div>
    );
};
