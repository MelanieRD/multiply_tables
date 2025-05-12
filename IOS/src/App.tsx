import { useContext } from '@lynx-js/react'
import './App.css'
import {Button} from './components/button/button.js'

export function App(props: {
  onMounted?: () => void
}) {
  return (
    <view className='App'>
      <text className='App-title'>Learning math with Lynx</text>
      <view className='App-buttons'>
        <Button text='1'/> 
        <Button text='2'/> 
        <Button text='3'/> 
        <Button text='4'/> 
        <Button text='5'/> 
        <Button text='6'/> 
        <Button text='7'/> 
        <Button text='8'/>
        <Button text='9'/>
        
      </view>
    </view>
  )
}
