import { useForm } from "react-hook-form"
import { Link, NavLink } from "react-router-dom"
import Input from "../../components/input/Input"
import SignButton from "../../components/sign-button/SignButton"
import { useAppDispatch } from "../../hooks/hooks"
import { cafeSignUp } from "../../store/reducers/cafes/cafesAction"
import { IReg } from "../../types/IReg"
import "./SignUpCafe.scss"

const SignUpCafe = () => {
    const { register, handleSubmit, formState: {errors, isValid}, reset } = useForm<IReg>()
    const dispatch = useAppDispatch()

    const onSubmit = (data: IReg) => {
        dispatch(cafeSignUp(data))
    }

    return(
        <div className="sign-up-cafe">
            <div className="sign-up-cafe-block">
                <div className="navlinks">
                    <NavLink to={"/sign-up-client"} className={({ isActive }) => (isActive? 'active-navlink': 'inactive-navlink')}>Стать клиентом</NavLink>
                    <NavLink to={"/sign-up-cafe"} className={({ isActive }) => (isActive? 'active-navlink': 'inactive-navlink')}>Для ресторана</NavLink>
                </div>
                <div className="already-have-account">
                    <span>Уже есть аккаунт?</span>
                    <Link to="/sign-in" className="link">Войти</Link>
                </div>
                <h1>СТАТЬ ПАРТНЕРОМ</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input label={"Название ресторана"} register={register} name="name" type="text"/>
                    <Input label={"Номер телефона"} register={register} name="phone" type="text"/>
                    <Input label={"Город"} register={register} name="city" type="text"/>
                    <Input label={"Адрес"} register={register} name="address" type="text"/>
                    <Input label={"Электронная почта"} register={register} name="mail" type="email"/>
                    <Input label={"Пароль"} register={register} name="password" type="password"/>
                    <SignButton text={"Отправить заявку"}></SignButton>
                </form>
            </div>
        </div>
    )
}

export default SignUpCafe