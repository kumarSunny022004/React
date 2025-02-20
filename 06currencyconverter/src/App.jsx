import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'
import { InputBox } from './components/index.js'

function App() {
  const [amount , setAmount] = useState(0)
  const [from , setFrom] = useState('usd')
  const [to , setTo] = useState('inr')
  const [convertedAmount , setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  // Ensure currencyInfo is defined before using Object.keys
  const options = Object.keys(currencyInfo || {})

  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2))
  }
  
  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(convertedAmount)
  }
  
  return (
    <div
      className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-center'
      style={{backgroundImage: `url(https://images.pexels.com/photos/18148936/pexels-photo-18148936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
