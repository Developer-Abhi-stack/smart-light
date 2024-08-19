import HeroSection from '../assets/Hero_section.png'

const Heading = () => {
    return (
        <div className='h-screen w-full bg-cover bg-center flex flex-col  items-center pt-32' style={{
            backgroundImage: `url(${HeroSection})`,

        }}>
            <h3 className='text-white text-2xl'>
                Smart Lighting Solutions
            </h3>
            <h1 className='text-gray-500 pt-5 text-4xl text-center leading-relaxed'>Bringing A New Perspective To Street Lights <br /> And The Cities Of Tomarrow</h1>
            <button type="button" className='bg-[#0061BA] px-10 py-2 text-white'>Login</button>
        </div>
    )
}

export default Heading
