import teddy from "../assets/teddy-heart.png";
export function Teddy() {
  return (
    <div className="flex justify-center w-full">
      <img
        src={teddy}
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain m-3 animate-bounce"
      ></img>
    </div>
  );
}
