import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, StarshipsPage, PilotsPage } from './pages'
import { NavBar } from './components'

export const Router = () => {
    return (
        <BrowserRouter>
            <NavBar />
                <Routes>
                    <Route path='/' element={<HomePage />}></Route>
                    <Route path='/pilots' element={<PilotsPage />}></Route>
                    <Route path='/starships' element={<StarshipsPage />}></Route>
                </Routes>
        </BrowserRouter>
    )
} 