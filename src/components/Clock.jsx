import Countdown from "react-countdown";

function Clock() {
  return (
    <div className="w-screen flex justify-center my-4 lg:mb-8">
      <div className="md:border border-gray/50 xl:mt-[8rem] pb-5 xl:pb-10 xl w-[100] xl:w-[35rem] flex flex-col justify-center items-center z-[10] text-white text-[3rem] md:text-[4rem] tracking-[1rem] font-clash">
        <Countdown
          date={new Date("2023-04-26T00:00:00")}
          className="text-[2rem] xl:text-[4rem]"
        />

        <div className="text-[.8rem] md:text-lg bottom-0 relative -tracking-tight">
          <span className="absolute left-[-9.5rem] md:left-[-13.5rem]">
            DAY
          </span>
          <span className="absolute left-[-4.5rem] md:left-[-7.5rem]">
            HOURS
          </span>
          <span className="absolute left-[.8rem] md:left-[.3rem]">MINUTES</span>
          <span className="absolute left-[6.5rem] md:left-[9rem]">SECONDS</span>
        </div>
      </div>
      {/* <Image
        src="/QR.png"
        alt="barcode"
        width={150}
        height={150}
        className="hidden xl:block object-contain px-4 mt-[8rem] border border-gray/50"
      /> */}

      <div className="hidden xl:block pl-4 border  min-w-min-[3rem] border-gray/50 p-3 mt-[8rem] text-white">
        <div className="flex flex-col gap-2 justify-center items-center h-[100%]">
          <span className="font-chakra text-[1.8rem]">
            2023 <span className="font-clash">April</span>
          </span>
          <span className="flex gap-2 text-[2rem] font-chakra font-bold">
            26
            <b className="text-[12px]">TH</b>
            27
            <b className="text-[12px]">TH</b>
          </span>
        </div>
      </div>

    </div>
  );
}

export default Clock;
