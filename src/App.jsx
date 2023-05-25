import * as Pages from './pages'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Pages.HomePage />} />
        <Route path="/superhero/:id" element={<Pages.SuperHeroPage />} />
      </Route>
    </Routes>
  )
}

export default App
