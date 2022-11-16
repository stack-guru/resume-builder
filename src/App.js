import { useSelector } from 'react-redux'
import Page from './components/page'
import './App.css';

function App() {
  let cards = useSelector((state) => state.pages.cards)
  const pages = []

  const generatePage = () => {
    let temp = []
    let sum = 0

    for (let i = 0; i < cards.length; i++) {
      sum += cards[i].height
      if (sum > 1024) {
        pages.push(temp)        
        temp = []
        sum = cards[i].height
      }
      temp.push(cards[i])
    }
    pages.push(temp)

    return (
      <>
        {pages.map((e, i) => <Page key={i} cards={e}/>)}
      </>
    )
  }

  return (
    <div className="App">
      {generatePage()}
    </div>
  );
}

export default App;
