import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Indonesia from './pages/indonesia/indonesia'
import Programming from './pages/programming/programming'
import Covid19 from './pages/covid19/covid19'
import Search from './pages/search/search'

import Saved from './pages/Saved';


export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Indonesia />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/covid19" element={<Covid19 />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}