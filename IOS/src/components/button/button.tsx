import "./button.css"
import { useContext, useEffect } from "@lynx-js/react"
import contextProps from "../../utils/context.js"
import { useNavigate } from 'react-router'

export const Button = ({text}: {text: string}) => {
    const {value, actualizarValue} = useContext(contextProps)
    const navigate = useNavigate()
    const primaryClasses = "bg-blue-500 hover:bg-blue-700 text-white";

    
    const handleTap = () => {
        actualizarValue(parseInt(text))  
        navigate('/math')
    }

    useEffect(() => {
        console.log(value)
    }, [value])

    return (
        <view className='button bg-tertiary' bindtap={handleTap}>
            <text>{text}</text>
        </view>
    )
}