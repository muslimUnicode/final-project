import { FC } from "react"
import "./Input.scss"

interface IInputProps{
    label: string
    register: any
    name: string
    type: string
}

const Input: FC<IInputProps> = ({label, register, name, type}) => {
    return(
        <div className="input">
            <h4>{label}</h4>
            <input type={type} {...register(name)}/>
        </div>
    )
}

export default Input