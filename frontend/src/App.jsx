import { useState } from 'react';
import axios from 'axios';
import "./index.css"

function App() {
    const [fruit, setFruit] = useState('');
    const [fruitsList, setFruitsList] = useState([]);

    const addFruit = async () => {
        if (!fruit) return;
        try {
            const response = await axios.post('http://localhost:3000/add-fruit', { fruit });
            setFruitsList(response.data.fruits);
            setFruit('');
        } catch (error) {
            console.error('Error adding fruit:', error);
        }
    };

    return (
        <div className="flex flex-col items-center p-10">
            <input 
                type="text" 
                value={fruit} 
                onChange={(e) => setFruit(e.target.value)} 
                className="border p-2 rounded"
                placeholder="Enter fruit name"
            />
            <button 
                onClick={addFruit} 
                className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
            >
                Add Fruit
            </button>
            <ul className="mt-4">
                {fruitsList.map((f, index) => (
                    <li key={index} className="border-b p-2">{f}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;