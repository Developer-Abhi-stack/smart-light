
import Logo from '../assets/logo.png'
const Plateform = () => {
    return (
        <div className=" bg-gradient-to-r from-[#FFFFFF] to-[#FAFFFF]">
            <div className="px-80 py-16">
                <h1 className="text-center text-5xl leading-relaxed">The plateform assists city managers on multiple fronts</h1>
                <div className="grid grid-cols-2 gap-4 p-4">
                    <div className="flex flex-col items-center justify-center p-4 border">
                        <img src={Logo} alt="Icon" className="mb-2 h-20 w-20" />
                        <p className='text-2xl text-center'>Saves on power consumption & related costs</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 border">
                        <img src={Logo} alt="Icon" className="mb-2 h-20 w-20" />
                        <p className='text-2xl text-center'>Lowers downtimes</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 border">
                        <img src={Logo} alt="Icon" className="mb-2 h-20 w-20" />
                        <p className='text-2xl text-center'>Detects power thefts.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 border">
                        <img src={Logo} alt="Icon" className="mb-2 h-20 w-20" />
                        <p className='text-2xl text-center'>Ensures smart monitoring and control of the street light infrastructure.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 border">
                        <img src={Logo} alt="Icon" className="mb-2 h-20 w-20" />
                        <p className='text-2xl text-center'>Ensures real-time actionable analytics on power failures, lamp malfunctions, voltage failures, etc.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 border">
                        <img src={Logo} alt="Icon" className="mb-2 h-20 w-20" />
                        <p className='text-2xl text-center'>Ensures security in the neighborhood</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Plateform
