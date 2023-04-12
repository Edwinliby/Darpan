import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import fsPromises from "fs/promises";
import path from "path";

function EventsDetails(props) {
  //create a pop up for the event Registration showing the embeded form
  const [popUp, setPopUp] = React.useState(false);

  React.useEffect(() => {
    if (popUp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [popUp]);

  return (
    <>
      <Head>
        <title>Event Details</title>
      </Head>
      <section>
        <Header />
        <div className="h-fit pt-24 p-6 bg-black text-white">
          <div className="flex flex-col items-center ">
            <p className="text-xl font-medium font-clash text-center">
              Darpan presents
            </p>
            <h1 className="text-[3rem] xl:text-[4rem] font-clash font-semibold text-center">
              {props.title}
            </h1>

            <div className="flex flex-col mt-[2rem] md:flex-row rounded-xl justify-between w-full md:w-[90%] font-clash bg-gray/25">
              <Image
                src={props.image}
                alt={props.title}
                width={500}
                height={500}
                className=""
              />
              <div className="relative flex flex-col justify-between w-full px-2 md:p-8 gap-16">
                <div className="flex flex-col gap-1">
                  <div className="flex relative mt-6 md:mt-0 pb-2">
                    <div className="w-8 h-8 bg-white rounded-full border-[2px] border-white/70"></div>
                    <div className="absolute left-4 w-8 h-8 rounded-full border-[2px] border-white/70"></div>
                  </div>

                  <h3 className="font-medium text-[1.5rem] md:text-8 pb-2">
                    {props.content}
                  </h3>
                  <p>{props.description}</p>

                  <div className="flex flex-col font-chakra font-semibold gap-4 pt-6">
                    <div className="flex flex-col">
                      <span>
                        Price pool :{" "}
                        <span className="font-medium">{props.pricepool}</span>
                      </span>
                      <span>
                        Reg fee :{" "}
                        <span className="font-medium">{props.regfee}</span>
                      </span>
                      <span>
                        End date :{" "}
                        <span className="font-medium">{props.enddate}</span>
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-main_primary text-[1.5rem]">
                        Co-ordinators
                      </span>
                      <Link href="tel:">
                        {props.c1name} :{" "}
                        <span className="font-medium hover:text-main_primary transition duration-300 ease-in-out">
                          {props.c1number}
                        </span>
                      </Link>
                      <Link href="tel:">
                        {props.c2name} :{" "}
                        <span className="font-medium hover:text-main_primary transition duration-300 ease-in-out">
                          {props.c2number}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>

                <button
                  className="relative bottom-5 bg-white text-black w-full rounded-full p-2 font-medium hover:bg-gray hover:text-white transition duration-300 ease-in-out"
                  onClick={() => setPopUp(true)}
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>

      {popUp && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex justify-center items-center animate-fadeIn ">
          <div className="relative w-full h-full max-w-[90%] lg:max-w-[80%]  xl:max-w-[70%]   max-h-[90%] flex flex-col justify-center items-center">
            <div className="absolute top-0 right-0 p-4">
              <button
                className="bg-transparent text-black rounded-full w-12 h-12 flex text-xl justify-center items-center font-semibold hover:bg-main_primary/90 hover:text-white transition duration-300 ease-in-out "
                onClick={() => setPopUp(false)}
              >
                X
              </button>
            </div>
            <iframe
              width="100%"
              height="100%"
              className="rounded-md"
              src={props.reglink}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "/events.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  const paths = [];
  objectData.posts.forEach((post) => {
    post.forEach((post) => {
      paths.push({ params: { id: post.id.toString() } });
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), "/events.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  const id = context.params.id;

  const post = objectData.posts.flat().find((post) => post.id == id);

  return {
    props: {
      title: post.title,
      image: post.img,
      content: post.content,
      description: post.description,
      c1name: post.c1name,
      c1number: post.c1no,
      c2name: post.c2name,
      c2number: post.c2no,
      regfee: post.regfee,
      pricepool: post.pricepool,
      enddate: post.enddate,
      reglink: post.reglink,
    },
  };
}

export default EventsDetails;
