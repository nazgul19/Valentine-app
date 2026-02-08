import Kid from "../assets/kid.mp4";
export const DancingKid = () => {
  return (
    <div className="flex justify-center items-center">
      <video
        src={Kid}
        autoPlay
        loop
        className="h-32 sm:h-40 md:h-48 w-auto rounded-xl"
      />
    </div>
  );
};
