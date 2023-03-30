import React from 'react'

export default function Faq() {
    return (
        <div className='px-2 py-4'>
            <div className='relative top-[-1rem] px-2 flex justify-start w-full font-clash font-bold text-primary'>
                <span className='text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem] z-10'>FAQ</span>
                <span className='absolute text-white/10 text-[4rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[7rem] left-5 xl:left-9 xl:top-5 top-4'>FAQ</span>
            </div>

            <div className='flex flex-col gap-4 xl:p-10'>
                <div className="font-chakra">
                    <div className='border-t-2 border-b-2 border-gray/60'>
                        <input id="collapsible1" className="toggle hidden" type="checkbox" />
                        <label for="collapsible1" className="lbl-toggle block cursor-pointer font-semibold text-white text-2xl p-7 ease-out duration-300">
                            What is Darpan? Why should i come their?
                        </label>
                        <div className="collapsible-content">
                            <div className="content-inner text-white px-4 text-lg">
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
                        <label for="collapsible2" className="lbl-toggle block cursor-pointer font-semibold text-white text-2xl p-7 ease-out duration-300">
                            What is Darpan? Why should i come their?
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
