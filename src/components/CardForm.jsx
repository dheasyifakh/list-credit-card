import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function CardForm({setCards, onClose}) {
    
    const [newCard, setNewCard] = useState({
        holderName: "",
        cardNumber: "",
        spendLimit: "",
        color: "#FFFFFF", // Default color
        expiryDate: "",
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewCard((prev) => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setCards((prevCards) => [...prevCards, newCard]);
        setNewCard({
            holderName: "",
            cardNumber: "",
            spendLimit: "",
            color: "#FFFFFF",
            expiryDate: "",
        });
        onClose()
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Credit Card Holder</label>
                    <input
                        type="text"
                        name="holderName"
                        placeholder="Superhuman"
                        value={newCard.holderName}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Credit Card Number</label>
                    <input
                        type="text"
                        name="cardNumber"
                        placeholder="1234-1234-1234-1234"
                        value={newCard.cardNumber}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Credit Card Spend Limit</label>
                    <input
                        type="number"
                        name="spendLimit"
                        placeholder="1000"
                        value={newCard.spendLimit}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Credit Card Color</label>
                    <input
                        type="color"
                        name="color"
                        value={newCard.color}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-2 w-full h-10"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expired At</label>
                    <input
                        type="date"
                        name="expiryDate"
                        placeholder="dd/mm/yyyy"
                        value={newCard.expiryDate}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-2 w-full"
                        required
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="button"
                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md mr-2"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}
