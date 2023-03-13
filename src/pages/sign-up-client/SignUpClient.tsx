import { useForm, SubmitHandler  } from "react-hook-form";
import Input from "../../components/input/Input"
import { useAppDispatch } from "../../hooks/hooks";
import { clientSignUp } from "../../store/reducers/clients/clientsAction";
import { IReg } from "../../types/IReg";
import "./SignUpClient.scss"

const SignUpClient = () => {
    const { register, handleSubmit, formState: {errors, isValid}, reset } = useForm<IReg>()
    const dispatch = useAppDispatch()

    const onSubmit = (data: IReg) => {
        dispatch(clientSignUp(data))
    }

    return(
        <div className="sign-up-client">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label={"Имя"} register={register} name="name" type="text"/>
                <Input label={"Номер телефона"} register={register} name="phone" type="text"/>
                <Input label={"Город"} register={register} name="city" type="text"/>
                <Input label={"Адрес"} register={register} name="address" type="text"/>
                <Input label={"Электронная почта"} register={register} name="mail" type="email"/>
                <Input label={"Пароль"} register={register} name="password" type="password"/>
                <button type="submit">Регистрация</button>
            </form>
        </div>
    )
}

export default SignUpClient