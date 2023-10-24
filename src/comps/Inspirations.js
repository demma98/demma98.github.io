import Navbar from "./Navbar";

const Inspirations = () => {
    return(
        <>
        <Navbar></Navbar>
        <br></br>
        <div className="inspiration_box">
            <div className="inspiration_title_voltaire">aurelio voltaire</div>
            <a href="https://voltaire.net/">
            <img src="https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/392976/355f39a1114c8758689d85627302f3d3398f6e2d/original/voltaire-scottirvine-press-sml.jpg/!!/b%3AW1sic2l6ZSIsIjM1MHciXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg"
            alt="aurelio voltaire" className="inspiration_image"></img>
            </a>
            <div className="inspiration_text">
                a super carismatic goth guy who makes music filled with puns
            </div>
        </div>
        </>
    )
}

export default Inspirations