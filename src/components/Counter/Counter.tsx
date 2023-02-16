import { useState } from "react"

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0)
  return (
    <div>
      <h1>Count is: {count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount+1)}>Increment</button>
      <input
        name="countSetter"
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
        />
      <button onClick={() => setCount(amount)}>Set Amount</button>
    </div>
  )
}