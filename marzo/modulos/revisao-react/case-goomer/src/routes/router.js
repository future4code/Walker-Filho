import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, RestaurantPage } from '../pages'


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/restaurant/:id' element={<RestaurantPage/>} />
            </Routes>
        </BrowserRouter>
    )
}