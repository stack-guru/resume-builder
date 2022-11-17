import { useSelector } from 'react-redux'
import Page from './components/page'
import './App.css';
import { PAGE_HEIGHT } from './constants';

function App() {
  let cards = useSelector((state) => state.pages.cards)
  const pages = []

  const generatePage = () => {
    let temp = []
    let sum = 0

    console.log(cards)

    for (let i = 0; i < cards.length; i++) {
      sum += cards[i].height
      if (sum > PAGE_HEIGHT) {
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
