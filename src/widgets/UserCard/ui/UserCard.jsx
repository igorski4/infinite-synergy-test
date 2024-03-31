import { useForm } from "react-hook-form";
import s from "./UserCard.module.scss";
import { InputField } from "../../../entities/InputField";
import {
    useGetUserByIdQuery,
    useUpdateUserMutation,
} from "../../../shared/api/api";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Button } from "../../../shared/ui/Button";

export const UserCard = () => {
    const userId = useSelector((state) => state.userId.value);
    const { data } = useGetUserByIdQuery(userId);

    const [updateUser] = useUpdateUserMutation();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        await updateUser({ id: data.id, data });
    };

    useEffect(() => {
        if (data) {
            reset({ ...data });
        }
    }, [data]);

    return (
        <form className={s.wrapper} onSubmit={handleSubmit(onSubmit)}>
            <InputField
                fieldName={"Имя"}
                placeholder={"Введите имя..."}
                name={"name"}
                register={register}
                rules={{ required: true }}
            />

            <InputField
                fieldName={"Департамент"}
                placeholder={"Введите департамент..."}
                name={"department"}
                register={register}
                rules={{ required: true }}
            />

            <InputField
                fieldName={"Компания"}
                placeholder={"Введите компанию..."}
                name={"company"}
                register={register}
                rules={{ required: true }}
            />

            <InputField
                fieldName={"Должность"}
                placeholder={"Введите должность..."}
                name={"jobTitle"}
                register={register}
                rules={{ required: true }}
            />
            <Button type="submit" className={s.button}>Сохранить</Button>
        </form>
    );
};
