import "./button.css"
import { useContext, useEffect } from "@lynx-js/react"
import contextProps from "../../utils/context.js"

export const Button = ({text}: {text: string}) => {
    const {value, actualizarValue} = useContext(contextProps)
    
    const handleTap = () => {
        actualizarValue(parseInt(text)) 
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