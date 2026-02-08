import { useState } from "react";
import { Teddy } from "./images/Teddy";
import { Button } from "./Components/Button";
import { DancingKid } from "./images/Kid";
function App() {
  const [hide, setHide] = useState(true);
  const [noButton, setNoButton] = useState({ x: 0, y: 0 });
  const moveNoButton = () => {
    const xPosition = Math.floor(Math.random() * 200 - 100);
    const yPosition = Math.floor(Math.random() * 200 - 100);
    setNoButton({ x: xPosition, y: yPosition });
  };
  return (
    <div className="bg-pink-200 min-h-screen w-screen flex justify-center items-center p-4">
      <div className="rounded-2xl bg-white-200 w-full max-w-2xl p-4 sm:p-6 md:p-8">
        <Teddy />
        <div className="flex justify-center p-4 sm:p-6 text-lg sm:text-2xl md:text-3xl text-center">
          💖✨Janvi, will you be my Valentine?🌷💖
        </div>
        {hide && (
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-10 p-4 sm:p-6 md:p-10 flex-wrap">
            <Button
              variant="primary"
              size="lg"
              text="Yes"
              textSize="lg"
              onClick={() => setHide(false)}
            />
            <div
              onMouseEnter={moveNoButton}
              style={{
                transform: `translate(${noButton.x}px, ${noButton.y}px)`,
              }}
            >
              <Button variant="secondary" size="sm" text="No" textSize="sm" />
            </div>
          </div>
        )}
        {!hide && <DancingKid />}
        {hide && (
          <div className="flex justify-center items-end text-sm sm:text-base text-center px-2">
            No is not an option🤭
          </div>
        )}
      </div>
    </div>
  );
}
export default App;
