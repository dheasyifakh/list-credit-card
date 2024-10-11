import { useState } from "react";
import CardForm from "./CardForm";
import CardDetail from "./CardDetail";

export default function CardList({ cards, setCards }) {
    const [openModalForm, setModalForm] = useState(false)
    const [openModalDetail, setModalDetail] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null); 

    const handleOpenDetailModal = (card) => {
        setSelectedCard(card); 
        setModalDetail(true);  
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString); 
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
        const year = date.getFullYear().toString().slice(-2); 
        return `${month}/${year}`;
    };

    return (
      <div className="w-full">
        <hr className="mb-4 text-red-600" style={{borderTopWidth: '2px'}}></hr>
        <div className="flex justify-between mb-5">
            <h4 className="text-xl font-semibold">Cards</h4>
            <span className="text-sm text-red-500 mr-2">View All</span>
        </div>
        <div className="relative">
          <div className="flex space-x-4 overflow-x-auto pb-4">
            <div className="flex-shrink-0 w-64 h-40 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50"
                 onClick={() => setModalForm(true)}
            >
              <div className="text-center">
                <span className="block mt-2 text-sm font-medium text-gray-500">Add new Card</span>
              </div>
            </div>
            {cards.sort((a,b)=> a.holderName.localeCompare(b.holderName)).map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 h-40 p-4 rounded-lg shadow-md relative overflow-hidden hover:cursor-pointer"
                style={{ backgroundColor: card.color }}
                onClick={() => handleOpenDetailModal(card)}
              >
                <h3 className="text-white text-lg font-bold mb-2">{card.holderName}</h3>
                <p className="text-white opacity-80 text-sm">
                **** **** **** {card.cardNumber.slice(-4)}
                </p>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <p className="text-white text-sm">Expiry <br/> {formatDate(card.expiryDate)}</p>
                  <img src="https://cdn.iconscout.com/icon/free/png-512/free-mastercard-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-4-pack-logos-icons-2944982.png?f=webp&w=256" alt="Card network" className="w-6 h-6" />
                </div>
              </div>
            ))}
          </div>
        </div>
        { openModalForm && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-4 rounded-lg shadow-lg w-1/3 ">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Add New Card</h2>
                    <button onClick={()=>setModalForm(false)} className="text-gray-500 hover:text-gray-700 hover:border-r-0">
                        &times;
                    </button>
                </div>
                    <CardForm onClose={()=>setModalForm(false)} setCards={setCards}/>
                </div>
            </div>
        )

        }
        {openModalDetail && selectedCard && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-4 rounded-lg shadow-lg w-1/3 ">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Card Detail</h2>
                    <button onClick={()=>setModalDetail(false)} className="text-gray-500 hover:text-gray-700 hover:border-r-0">
                        &times;
                    </button>
                </div>
                    <CardDetail card={selectedCard} onClose={()=>setModalDetail(false)}/>
                </div>
            </div>
        )
        }
      </div>
    );
  }