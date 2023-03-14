import { FC } from "react"
import "./SignButton"

interface ISignButtonProps {
    text: string
}

const SignButton: FC<ISignButtonProps> = ({text}) => {
    return(
        <div className="sign-button">
            <button type="submit">{text}</button>
        </div>
    )
}

export default SignButton