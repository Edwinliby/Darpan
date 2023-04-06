import React from 'react'

export default function Faq() {
    return (
        <div className='px-2 py-4 xl:px-20'>
            <div className='flex justify-start w-full font-clash font-bold'>
                <span className='text-white/10 text-[5.5rem] xl:text-[7rem]'>FAQ</span>
            </div>

            <div className='flex flex-col gap-4 xl:p-2'>
                <div className="font-chakra">
                    <div className='border-t-2 border-b-2 border-gray/60'>
                        <input id="collapsible1" className="toggle hidden" type="checkbox" />
                        <label htmlFor="collapsible1" className="lbl-toggle block cursor-pointer font-semibold text-white text-xl md:text-2xl p-7">
                            What are the available transportation options for commuting to college?
                        </label>
                        <div className="collapsible-content">
                            <div className="content-inner text-white px-4">
                                <p>
                                    Just come and see for yourself. We are a group of people who are passionate about technology and want to
                                    share that passion with others.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="font-chakra">
                    <div className='border-t-2 border-b-2  border-gray/60'>
                        <input id="collapsible2" className="toggle hidden" type="checkbox" />
                        <label htmlFor="collapsible2" className="lbl-toggle block cursor-pointer font-semibold text-white text-xl md:text-2xl p-7">
                            What is the allocation of activity points for individuals who participate in the event?
                        </label>
                        <div className="collapsible-content">
                            <div className="content-inner text-white px-4">
                                <p>
                                    Just come and see for yourself. We are a group of people who are passionate about technology and want to
                                    share that passion with others.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
