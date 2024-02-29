export default function InitialLoader() {
  return (
    <div className="loader w-screen h-screen bg-black z-[28]  flex items-center justify-center">
      <video
        src="/preloader.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-[40rem] h-[40rem]"
      ></video>
    </div>
  );
}
