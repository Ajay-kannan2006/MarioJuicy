import './App.css'
import Card from './card'
import Filter_bar from './Filter_bar'
import HomeScreenOffers from './HomeScreenOffers'
function App() {

  return (
    <div className='cards'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Filter_bar/>
      <HomeScreenOffers/>
    </div>
    
  )
}

export default App
