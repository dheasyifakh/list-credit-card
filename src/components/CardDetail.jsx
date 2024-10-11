import React from 'react'

const CardDetail = ({card, onClose}) => {
  console.log(card)
  return (
    <div>
         <div className="mb-4">
        <label className="text-gray-700 text-sm font-semibold">Card Holder Name</label>
        <p className="text-lg font-medium">{card.holderName}</p>
      </div>
      <div className="mb-4">
        <label className="text-gray-700 text-sm font-semibold">Expired At</label>
        <p className="text-lg font-medium">{card.expiryDate}</p>
      </div>
      <div className="mb-4">
        <label className="text-gray-700 text-sm font-semibold">Card Color</label>
        <div className="w-10 h-10 rounded" style={{ backgroundColor: card.color }}></div>
      </div>
      <div className="mt-6 flex justify-end">
        <button
          onClick={onClose}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default CardDetail