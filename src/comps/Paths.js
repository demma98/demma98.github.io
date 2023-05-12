import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Error from "./Error"
import Links from "./Links"

const Paths = () => {
    return(
        <HashRouter>
            <Routes>
                <Route exact path='/' element={<Home></Home>}></Route>
                <Route exact path='/links' element={<Links></Links>}></Route>
                <Route path='*' element={<Error></Error>}></Route>
            </Routes>
        </HashRouter>
    )
}

export default Paths