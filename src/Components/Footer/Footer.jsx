import React from 'react'
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from '@mui/icons-material';

const Footer = () => {
    return (
        <>
            <div className='bg-[#5C5193] w-full mt-5'>
                <div className='flex flex-wrap justify-center items-center relative'>
                    <div className='mt-10'>
                        <img className='w-[63%]' src='https://audrey-chen.my.canva.site/portfolio/videos/18a627afe7982b6e6fe43f19b02947ce.gif' />
                    </div>

                    <div className='w-1/3'>
                        <div className=' flex flex-row w-[] text-white'>
                            <img src="../../Images/profile.jpg" alt="profile" className='w-[30%]' />
                            <div className='bg-black opacity-75 flex flex-col justify-center text-start  px-3'>
                                <div className='text-start'>Sameer - overview</div>
                                <div>here to innovate: Sameer khan has 67 repo available. Follow thier code in github..</div>
                                <a href="https://github.com/Sameer-472"><GitHubIcon id="github" className="social-media-icons" /></a>
                            </div>
                        </div>
                    </div>
                    <div className='w-fit '>
                        <div className=' flex flex-row w-[] text-white'>
                            <div className='flex flex-col justify-center text-start px-3 bg-[mediumpurple] opacity-[94%] absolute right-[50px] top-[55%] h-[18%] w-[21%]'>
                                <div className='text-start text-2xl'>Lets Connect!!<Link /></div>
                                <div className='text-xl'>+923163136464</div>
                                <div className='text-xl'>muhammadsameer2016@yahoo.com</div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='w-full flex justify-center bg-gray-900 text-white py-2'>
                <p>Made with my 💜</p>
                <p>Developer Sameer</p>
            </div>
        </>
    )
}

export default Footer