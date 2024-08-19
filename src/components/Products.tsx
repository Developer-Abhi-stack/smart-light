
import Lights from '../assets/smart_light.png'
import Icon from '../assets/icon_png.png'
const Products = () => {
    return (
        <div className=" bg-gradient-to-r from-[#a6c6e6] to-[#ccd4dc] px-56 pt-24">
            <div className="w-fit bg-gradient-to-r from-[#ccd4dc] to-[#b3cde8] px-6 py-3">
                <h1 className="text-xl font-semibold">Products</h1>
            </div>
            <div className="text-4xl text-[#000000] w-2/3">
                <h1 className="leading-relaxed"><span className="font-semibold">Cutting-edge hardware, offerings</span> <br />
                    helping cities optimize resources and
                    achieve smart development goals</h1>
            </div>

            <div className="pt-10 flex flex-wrap gap-4 text-sm">
                <button className="border rounded p-2 border-[#505050]" type="button">Centralized Control & Monitoring System</button>
                <button className="border p-2 border-[#505050]" type="button">NEMA Mounted VOLC 1160</button>
                <button className="border p-2 border-[#505050]" type="button">Retrofit Street Light Controller VOLC 2160</button>
                <button className="border p-2 border-[#505050]" type="button">Retrofit Street Light Controller VOLC 2180</button>
                <button className="border p-2 border-[#505050]" type="button">Retrofit Street Light Controller VOLC 4180</button>
            </div>

            <div className='grid grid-cols-2 pt-5'>
                <div>
                    <img className='h-2/3 w-full' src={Lights} alt="lights" />
                </div>
                <div className='bg-gradient-to-r from-[#f0f0f0] to-[#bed3e8] h-2/3 w-full'>
                    <div className='px-12 py-24'>
                        <h6 className='text-gray-600 text-sm'>Products 1/5</h6>
                        <h1 className='text-3xl font-semibold leading-relaxed'>Centralized Control &
                            Monitoring System</h1>
                        <p className='text-sm pt-3 leading-relaxed'>Designed indigenously for street lighting projects,<br />
                            the CCMS offers a complete feeder panel for
                            a <br /> group of 30-50 street lights.</p>
                        <div className='pt-8'>
                            <button type="button" className='text-blue-600 flex gap-5 items-center'>Know More <img src={Icon} alt="icon" /></button>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Products
