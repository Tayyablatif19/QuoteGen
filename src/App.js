import { useEffect, useState } from 'react';
import './App.css';



function App() {

  const [quotes, setQuotes] = useState([]);



  const URL = 'https://api.api-ninjas.com/v1/quotes'

  const quoteSearch = async () => {
    const response = await fetch(URL, {
      headers: { 'X-Api-Key': 'UO4xN9m8vh4/k12/VR7g+g==LGIYbjdPM4gOEFNi' }

    })
    const data = await response.json()

    setQuotes(data);
  }


  useEffect(() => {
    quoteSearch();
  }, [])

  return (
    <>
    <div className="App">

      <div className='container'>

        {
          quotes.length > 0
            ? (
              <div className='quote'>
                <p>{quotes[0].quote}</p>
                <p>{quotes[0].author}</p>

              </div>

            ) : (

              <div>
                <h4>No Quote to show</h4>
                
              </div>

            )
        }


      
      </div>
      <button onClick={() => {
        quoteSearch(quotes);
      }}>Generate quote</button>

    </div>
    </>
  );
}

export default App;
