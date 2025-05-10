import { forwardRef, useState, useImperativeHandle } from "@lynx-js/react"
import "./input.css"

export const Input = forwardRef((props, ref) => {
    const [value, setValue] = useState('')
    const [isEditing, setIsEditing] = useState(false)

    useImperativeHandle(ref, () => ({
        value: value,
        clear: () => {
            setValue('')
        }
    }))

    const handleTap = () => {
        setIsEditing(true)
    }

    const handleNumberTap = (num: string) => {
        setValue(prev => {
            const newValue = prev + num
            return newValue
        })
    }

    const handleClear = () => {
        setValue('')
    }

    return (
        <view className="input">
            <view 
                className="input-field"
                bindtap={handleTap}
                {...props}
            >
                <text>{value || 'answer'}</text>
            </view>
            
            {isEditing && (
                <view className="number-pad">
                    <view className="number-row">
                        <view className="number-button" bindtap={() => handleNumberTap('1')}><text>1</text></view>
                        <view className="number-button" bindtap={() => handleNumberTap('2')}><text>2</text></view>
                        <view className="number-button" bindtap={() => handleNumberTap('3')}><text>3</text></view>
                    </view>
                    <view className="number-row">
                        <view className="number-button" bindtap={() => handleNumberTap('4')}><text>4</text></view>
                        <view className="number-button" bindtap={() => handleNumberTap('5')}><text>5</text></view>
                        <view className="number-button" bindtap={() => handleNumberTap('6')}><text>6</text></view>
                    </view>
                    <view className="number-row">
                        <view className="number-button" bindtap={() => handleNumberTap('7')}><text>7</text></view>
                        <view className="number-button" bindtap={() => handleNumberTap('8')}><text>8</text></view>
                        <view className="number-button" bindtap={() => handleNumberTap('9')}><text>9</text></view>
                    </view>
                    <view className="number-row">
                        <view className="number-button" bindtap={handleClear}><text>C</text></view>
                        <view className="number-button" bindtap={() => handleNumberTap('0')}><text>0</text></view>
                        <view className="number-button" bindtap={() => setIsEditing(false)}><text>✕</text></view>
                    </view>
                </view>
            )}
        </view>
    )
})