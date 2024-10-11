import { useState } from 'react'
import './App.css'
import CardList from './components/CardList'

function App() {
  const data =[
    { holderName: "John Doe", cardNumber: "**** **** **** 1234", spendLimit: "500", color: "#EB4141", expiryDate: "12/25" },
    { holderName: "Jane Smith", cardNumber: "**** **** **** 5678", spendLimit: "1000", color: "#3782F5", expiryDate: "11/24" },
  ]
  const [cards, setCards] = useState(data);
  
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Credit Card Manager</h1>
            <CardList cards={cards} setCards={setCards}/>
        </div>
    );
}

export default App
