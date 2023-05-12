import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <>
        <div>
            <table>
                <tr>
                    <th>
                        <Link to='/'>
                            home
                        </Link>
                    </th>
                    <th>
                        <Link to='/links'>
                            links
                        </Link>
                    </th>
                </tr>
                
            </table>
        </div>
        </>
    )
}

export default Navbar