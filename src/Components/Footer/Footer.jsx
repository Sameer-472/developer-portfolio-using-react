import React from 'react'
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from '@mui/icons-material';

const Footer = () => {
    return (
        <>
            <div className='w-full mt-20 flex flex-col justify-center bg-[#0D1834] text-white py-2'>
                <div className='px-16'>
                    <div className='font-semibold text-xl text-[#D9D9D9]'>Muhammad Sameer Khan</div>
                    <div className="flex flex-row justify-start space-x-3 my-8" >
                        <a href="https://github.com/Sameer-472"><GitHubIcon id="github" className="social-media-icons" /></a>
                        <a href="https://www.instagram.com/skywalker_sameer/"> <InstagramIcon id="instagram" className="social-media-icons" /></a>
                        <a href="https://www.facebook.com/profile.php?id=100009529212122"><FacebookIcon id="facebook" className="social-media-icons" /></a>
                        <a href="https://twitter.com/Sameerkhan_45"><TwitterIcon id="twitter" className="social-media-icons" /></a>
                        <a href="https://www.linkedin.com/in/muhammad-sameer-27ba2a172/"><LinkedInIcon id="linkedin" className="social-media-icons" /></a>
                    </div>
                </div>
            </div>
            <div className='mt-5 text-[15px]  px-16 w-full grid grid-cols-1 md:grid-cols-3 h-[60px]'>
                <div className='md:text-start text-center'>@2024 skywalkersameer. All right reserved.</div>
                <div className='text-center'>{`</> with 💜 by Sameer`}</div>
                <div className='md:text-end text-center'>v.2.0</div>
            </div>
        </>
    )
}

export default Footer