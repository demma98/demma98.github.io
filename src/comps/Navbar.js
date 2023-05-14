import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <div className="navbar">
            <table>
            <tbody>
                <tr>
                    <th>
                        <Link to='/' className="nav_link">
                            🏠 home
                        </Link>
                    </th>
                    <th>
                        <Link to='/links' className="nav_link">
                            🔗 links
                        </Link>
                    </th>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default Navbar