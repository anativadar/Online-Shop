import { Link } from "react-router-dom";


export default function NavBar() {
    return <nav className="nav">
        <a href="/" className="site-title">Perfume Shop</a>
        <ul>
            <li>
                <a href="/products">Products</a>
            </li>
            <li>
            <a href="/about">About</a>
            </li>
            <li>
            <a href="/admin">Admin Page</a>
            </li>
        </ul>
    </nav>
}