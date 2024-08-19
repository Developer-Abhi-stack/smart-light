import footerImage from '../assets/Footer.png'

const Footer = () => {
    return (
        <footer className='h-[500px] w-full bg-cover bg-center' style={{
            backgroundImage: `url(${footerImage})`,

        }}>
            <div className='p-32'>
                <div className='grid grid-cols-2 text-white '>
                    <div>
                        <div className='text-2xl flex items-center gap-2'>
                            <i className="ri-wifi-fill text-5xl text-[#0061BA]"></i>
                            <div className="">Smart Lights</div>
                        </div>
                    </div>
                    <div>
                        <ul className="flex space-x-20 items-center justify-center">
                            <li>
                                <a href="/product" className="hover:text-gray-300">Product</a>
                            </li>
                            <li>
                                <a href="/services" className="hover:text-gray-300">Software Services</a>
                            </li>
                            <li>
                                <a href="/follow-us" className="hover:text-gray-300">Follow Us</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='pt-48'>
                    <hr className='w-3/4' />
                </div>

                <div className='text-white pt-5'>
                    <ul className="flex space-x-10 justify-start">
                        <li>
                            <a href="/product" className="hover:text-gray-300">Privacy Policy</a>
                        </li>
                        <li>
                            <div className='w-[2px] h-6 bg-white'></div>
                        </li>
                        <li>
                            <a href="/services" className="hover:text-gray-300">Terms & Conditions</a>
                        </li>
                        <li>
                            <div className='w-[2px] h-6 bg-white'></div>
                        </li>
                        <li>
                            <a href="/follow-us" className="hover:text-gray-300">Cookie Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>

    )
}

export default Footer
