import { useContext, useEffect, useState, useCallback, useRef} from "@lynx-js/react"
import contextProps from "../utils/context.js"
import { useNavigate } from "react-router"
import "./math.css"
import { Input } from "../components/input/input.js"

export const Math = () => {
    const {value} = useContext(contextProps)    
    const navigate = useNavigate()
    const inputRef = useRef(null)

    const [fail, setFail] = useState(0)
    const [score, setScore] = useState(0)
    const [shuffle, setShuffle] = useState(false)
    const [previousNumber, setPreviousNumber] = useState(1)
    const [number2, setNumber2] = useState(1)
    const [answer, setAnswer] = useState(value * number2)

    const handleCheck = () => {
        const inputValue = parseInt(inputRef.current?.value || '0')
        
        if (inputValue === answer) {
            setScore(score + 1)
        } else {
            setFail(fail + 1)
        }

        if (shuffle) {
            let random_num = random_number()
            setPreviousNumber(number2)
            if (random_num === previousNumber) {
                setNumber2(random_number())
            } else {
                setNumber2(random_num)
            }
        } else {
            if (number2 >= 12) {
                setNumber2(1)
            } else {
                setNumber2(number2 + 1)
            }   
        }
        
        // Limpiar el input después de verificar
        inputRef.current?.clear()
    }

    const handleShuffle = () => {
        setShuffle(!shuffle)
    }

    const random_number = () => {
        const max_number = 12
        const min_number = 1
        return globalThis.Math.floor(globalThis.Math.random() * (max_number - min_number + 1)) + min_number
    }

    useEffect(() => {
        setAnswer(value * number2)
    }, [value, number2])

    return (
        <view className="math">
            <view className="back-button" bindtap={() => navigate('/')}>
                <text>Back</text>
            </view>

            <view>
                <text className="math-title">Math, table of {value}</text>
            </view>

            <view className="state-container"> 
                <text>Score: {score} </text>
                <text>Fails: {fail}</text>
            </view>

            <view className="input-container">
                <text className="math-question">{value} x {number2} = </text>
                <Input ref={inputRef} />
                <view className="input-button" bindtap={handleCheck}>
                    <text>check</text>
                </view>
            </view>

            <view className="shuffle-button" bindtap={handleShuffle}>
                <text>{shuffle ? "In Order" : "Shuffle"}</text>
            </view>
        </view>
    )
}