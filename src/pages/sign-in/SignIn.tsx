import { useForm } from "react-hook-form"
import Input from "../../components/input/Input"
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
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input label={"Электронная почта"} register={register} name="mail" type="email"/>
                    <Input label={"Пароль"} register={register} name="password" type="password"/>
                    <button type="submit">Войти</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn