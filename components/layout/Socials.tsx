import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"

const Socials = () => {
    return (
        <div className="flex gap-2 bg-dark03  rounded-[100px] border border-dark12 p-2 w-fit max-900:mb-[30px]">
            <a href="https://x.com/devsultan06" className="hover:text-lightgrey text-white bg-dark12 p-3 border border-dark12 rounded-[1000] max-900:rounded-[1000px]"><FaTwitter /></a>
            <a href="https://github.com/devsultan06" className="hover:text-lightgrey text-white  bg-dark12 p-3 border border-dark12 rounded-[1000] max-900:rounded-[1000px]"><FaGithub /></a>
            <a href="https://www.instagram.com/devsultan06" className="hover:text-lightgrey text-white  bg-dark12 p-3 border border-dark12 rounded-[1000] max-900:rounded-[1000px]"><FaInstagram /></a>
        </div>)
}

export default Socials