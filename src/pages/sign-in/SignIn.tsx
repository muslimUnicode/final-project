import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import Input from "../../components/input/Input"
import SignButton from "../../components/sign-button/SignButton"
import { useAppDispatch } from "../../hooks/hooks"
import { clientSignIn } from "../../store/reducers/clients/clientsAction"
import { IAuth } from "../../types/IAuth"
import "./SignIn.scss"

const SignIn = () => {
    const { register, handleSubmit, formState: {errors, isValid}, reset } = useForm<IAuth>()
    const dispatch = useAppDispatch()

    const onSubmit = (data: IAuth) => {
        dispatch(clientSignIn(data))
    }
    
    return(
        <div className="sign-in">
            <div className="sign-in-form">
                <h1>Войти</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input label={"Электронная почта"} register={register} name="mail" type="email"/>
                    <Input label={"Пароль"} register={register} name="password" type="password"/>
                    <SignButton text="Войти"></SignButton>
                </form>
                <div className="have-not-account">
                    <span className="have-not-account-span">Нет аккаунта?</span>
                    <Link to="/sign-up-client" className="sign-up-link">Зарегистрироваться</Link>
                </div>
            </div>
        </div>
    )
}

export default SignIn