import React from 'react'

export default function RitModel() {

    React.useEffect(() => {

        const ACTIVECLASS = 'active';
        const IMAGES = document.querySelectorAll('.flex-card-container');

        IMAGES[0].classList.add(ACTIVECLASS);

        function removeActiveClass() {
            const elm = document.querySelector(`.${ACTIVECLASS}`)
            if (elm) {
                elm.classList.remove(ACTIVECLASS);
            }
        }

        function addClass($event) {
            $event.stopPropagation();
            removeActiveClass();
            const target = $event.currentTarget;
            target.classList.add(ACTIVECLASS);
        }

        IMAGES.forEach(image => {
            image.addEventListener('click', addClass);
        })
    }, [])

    return (
        <div className='flex justify-center py-8'>
            <section class="flex items-stretch justify-between w-[90%] max-w-[60rem] h-[70vh] max-h-[50vh]">

                <article class="flex-card-container bg-[url('/rock-meme.gif')] bg-cover bg-no-repeat">
                    <div class="overlay">


                    </div>
                </article>

                <article class="flex-card-container bg-[url('/talk-2.png')] bg-cover bg-no-repeat">
                    <div class="overlay">


                    </div>
                </article>

                <article class="flex-card-container bg-[url('/talk-1.png')] bg-cover bg-no-repeat">
                    <div class="overlay">


                    </div>
                </article>

                {/* <article class="flex-card-container">
                    <div class="overlay">

                        <h3>Beispielbild 1</h3>
                        <p>Dazu eine kleine coole beschreibung zu diesem Article.</p>
                    </div>
                </article> */}

            </section>
        </div>
    )
}
