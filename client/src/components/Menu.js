import {NavLink} from 'react-router-dom'

function Menu() {


    return(
        <div>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/vegetables"> Vegetables </NavLink>
            <NavLink to="/perennials"> Perennials </NavLink>
        </div>
    )
}

export default Menu