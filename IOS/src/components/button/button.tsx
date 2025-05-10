import "./button.css"
import { useContext, useEffect } from "@lynx-js/react"
import contextProps from "../../utils/context.js"
import { useNavigate } from 'react-router'

export const Button = ({text}: {text: string}) => {
    const {value, actualizarValue} = useContext(contextProps)
    const navigate = useNavigate()
    
    const handleTap = () => {
        actualizarValue(parseInt(text))  
        navigate('/math')
    }

    useEffect(() => {
        console.log(value)
    }, [value])

    return (
        <view className='button' bindtap={handleTap}>
            <text>{text}</text>
        </view>
    )
}