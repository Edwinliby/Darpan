export default function InitialLoader() {
  return (
    <div className="loader w-screen h-screen bg-black z-[28]  flex items-center justify-center">
      <video
        src="/preloader_loading.mp4"
        autoPlay
        loop
        muted
        className="w-[40rem] h-[40rem]"
      ></video>
    </div>
  );
}
