import { useForm, SubmitHandler  } from "react-hook-form";
import Input from "../../components/input/Input"
import { useAppDispatch } from "../../hooks/hooks";
import { clientSignUp } from "../../store/reducers/clients/clientsAction";
import { IAuth } from "../../types/IAuth";
import "./SignUp.scss"

const SignUp = () => {
    const { register, handleSubmit, formState: {errors, isValid}, reset } = useForm<IAuth>()
    const dispatch = useAppDispatch()

    const onSubmit = (data: IAuth) => {
        dispatch(clientSignUp(data))
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label={"Имя"} register={register} name="name" type="text"/>
                <Input label={"Номер телефона"} register={register} name="phone" type="text"/>
                <Input label={"Город"} register={register} name="city" type="text"/>
                <Input label={"Адрес"} register={register} name="address" type="text"/>
                <Input label={"Электронный адрес"} register={register} name="mail" type="email"/>
                <Input label={"Пароль"} register={register} name="password" type="password"/>
                <input type="submit" value="Регистрация"/>
            </form>
        </div>
    )
}

export default SignUp