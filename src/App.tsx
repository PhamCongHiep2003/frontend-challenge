import logo from './logo.svg'
import './App.css'
import jsonData from './data/characters.json'
import type { Character } from './types'
import Masthead from './component/Masthead'
import Filters from './component/Filters'
import Totals from './component/Totals/Totals'
import Search from './component/Search/Search'
import Row from './component/Row/Row'
import SearchResult from './component/SearchResult/SearchResult'
import { useState } from 'react'
import FilterSearch from './component/FilterSearch/FilterSearch'

const data: Character[] = jsonData as Character[]

function App() {

  const [myTeamList, setMyTeamList] = useState([]);

  return (
    <div className="App">
      <Masthead/>
      <Totals/>
      <FilterSearch/>
    </div>
  )
}

export default App
