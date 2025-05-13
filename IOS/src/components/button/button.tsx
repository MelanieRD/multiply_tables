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
        <view 
            className="w-[100px] h-[100px] rounded-lg border border-gray-700 flex justify-center items-center text-xl font-bold cursor-pointer 
            transition-all duration-200 ease-in-out transform
            bg-tertiary hover:bg-opacity-90 
            active:scale-95 active:bg-opacity-100 active:shadow-inner
            shadow-lg hover:shadow-xl
            m-2.5 p-2.5 text-center"
            bindtap={handleTap}
        >
            <text className="select-none">{text}</text>
        </view>
    )
}