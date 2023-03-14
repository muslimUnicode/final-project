import { useForm, SubmitHandler  } from "react-hook-form";
import { NavLink, Link } from "react-router-dom";
import Input from "../../components/input/Input"
import SignButton from "../../components/sign-button/SignButton";
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
            <div className="sign-up-client-block">
                <div className="navlinks">
                    <NavLink to={"/sign-up-client"} className={({ isActive }) => (isActive? 'active-navlink': 'inactive-navlink')}>Стать клиентом</NavLink>
                    <NavLink to={"/sign-up-cafe"} className={({ isActive }) => (isActive? 'active-navlink': 'inactive-navlink')}>Для ресторана</NavLink>
                </div>
                <div className="already-have-account">
                    <span>Уже есть аккаунт?</span>
                    <Link to="/sign-in" className="link">Войти</Link>
                </div>
                <h1>ЗАРЕГИСТРИРОВАТЬСЯ</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input label={"Имя"} register={register} name="name" type="text"/>
                    <Input label={"Номер телефона"} register={register} name="phone" type="text"/>
                    <Input label={"Город"} register={register} name="city" type="text"/>
                    <Input label={"Адрес"} register={register} name="address" type="text"/>
                    <Input label={"Электронная почта"} register={register} name="mail" type="email"/>
                    <Input label={"Пароль"} register={register} name="password" type="password"/>
                    <SignButton text={"Регистрация"}></SignButton>
                </form>
            </div>
        </div>
    )
}

export default SignUpClient