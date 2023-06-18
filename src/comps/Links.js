import Navbar from "./Navbar"

const Links = () => {
    return(
        <>
        <Navbar></Navbar>
        <br />
        <div className="links_container">
            <div>
                <a href="https://www.youtube.com/channel/UCowbnKqSZiq_vQHn909U59Q" className="link_youtube">youtube</a>
            </div>
            <br />
            <div>
                <a href="https://soundcloud.com/demma-98" className="link_soundcloud">soundcloud</a>
            </div>
            <br />
            <div>
                <a href="https://github.com/demma98" className="link_github">github</a>
            </div>
            <br />
            <div>
                <a href="https://twitter.com/demma_98" className="link_twitter">twitter</a>
            </div>
            <br />
            <div>
                <a href="https://www.reddit.com/user/demma98" className="link_reddit">reddit</a>
            </div>
            <br />
            <div>
                <a href="https://www.twitch.tv/demma98" className="link_twitch">twitch</a>
            </div>
            <br />
        </div>
        </>
    )
}

export default Links