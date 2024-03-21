import { NavLink } from 'react-router-dom';

function Nav({ logOutHandler }) {
    return <nav>
        <NavLink to='/home'>Home</NavLink>
        <div onClick={logOutHandler}>Logout</div>
    </nav>
}

export default Nav;