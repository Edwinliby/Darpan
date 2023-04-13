import React from 'react'

export default function Faq() {
    return (
        <div className='px-2 py-4 xl:px-20'>
            <div className='flex justify-start w-full font-clash font-bold'>
                <span className='text-white/30 text-[5.5rem] xl:text-[7rem]'>FAQs</span>
            </div>

            <div className='flex flex-col gap-4 xl:p-2'>
                <div className="font-chakra">
                    <div className='border-t-2 border-b-2 border-gray/20'>
                        <input id="collapsible1" className="toggle hidden" type="checkbox" />
                        <label htmlFor="collapsible1" className="lbl-toggle block cursor-pointer font-semibold text-white/30 text-xl md:text-2xl p-7">
                            What are the prerequisites for darpan?
                        </label>

                        <div className="collapsible-content">
                            <div className="content-inner text-white pl-8">
                                <p>All students with a valid college ID can enter to the fest for free</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="font-chakra">
                    <div className='border-t-2 border-b-2  border-gray/20'>
                        <input id="collapsible2" className="toggle hidden" type="checkbox" />
                        <label htmlFor="collapsible2" className="lbl-toggle block cursor-pointer font-semibold text-white/30 text-xl md:text-2xl p-7">
                            Is there any hostel facilities available?
                        </label>
                        <div className="collapsible-content">
                            <div className="content-inner text-white pl-8">
                                <p>Unfortunately, there are no hostel facilities available for the tech fest, and we apologize for any inconvenience this may cause.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
