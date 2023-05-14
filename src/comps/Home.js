import Navbar from "./Navbar"

const Home = () => {
    return(
        <>
        <Navbar></Navbar>
        <div className="home">
            <br />
            <table className="gender">
            <tbody>
            <tr>
                <td className="trans_flag_cell">
                    <div className="trans_flag">
                        <div className="trans_flag_blue">
                            <div className="trans_flag_blank"></div>
                            <div className="trans_flag_blank"></div>
                            <div className="trans_flag_blank"></div>
                            <div className="trans_flag_pink">
                                <div className="trans_flag_blank"></div>
                                <div className="trans_flag_blank"></div>
                                <div className="trans_flag_blank"></div>
                                <div className="trans_flag_blank"></div>
                                <div className="trans_flag_white">
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
                <td className="pronouns_cell">
                    <div className="pronouns">
                        pronouns : she/her
                    </div>
                </td>
            </tr>
            </tbody>
            </table>
            <br />
            <div className="im_demma">
                im demma
                <br />
                i make stuff
                <br />
            </div>
        </div>
        </>
    )
}

export default Home