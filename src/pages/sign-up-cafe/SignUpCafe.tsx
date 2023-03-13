import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import Input from "../../components/input/Input"
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
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label={"Название ресторана"} register={register} name="name" type="text"/>
                <Input label={"Номер телефона"} register={register} name="phone" type="text"/>
                <Input label={"Город"} register={register} name="city" type="text"/>
                <Input label={"Адрес"} register={register} name="address" type="text"/>
                <Input label={"Электронна почта"} register={register} name="mail" type="email"/>
                <Input label={"Пароль"} register={register} name="password" type="password"/>
                <button type="submit">Отправить заявку</button>
            </form>
        </div>
    )
}

export default SignUpCafe