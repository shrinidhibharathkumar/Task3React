import "./App.css";
import { useState } from "react";

function App() {
  const [bg, setbg] = useState("nine");
  const [clicked, setclicked] = useState(true);
  const [color, setcolor] = useState("nine");

  const colorpick = (color) => {
    setcolor(color);
  };
  const click = () => {
    setbg(color);
    setclicked(false);
  };

  return (
    <>
      <div className="">
        <div className="back d-flex justify-content-center align-items-center">
          <div>
            <div className="d-flex justify-content-center text">
              Color picker
            </div>
            <div
              className={
                "box d-flex justify-content-center align-items-center " + bg
              }
            >
              <div>
                {clicked && (
                  <div className="d-flex">
                    <div
                      className="small-box one"
                      onClick={() => colorpick("one")}
                    ></div>
                    <div
                      className="small-box two"
                      onClick={() => colorpick("two")}
                    ></div>
                    <div
                      className="small-box three"
                      onClick={() => colorpick("three")}
                    ></div>
                    <div
                      className="small-box four"
                      onClick={() => colorpick("four")}
                    ></div>
                    <div
                      className="small-box five"
                      onClick={() => colorpick("five")}
                    ></div>
                    <div
                      className="small-box six"
                      onClick={() => colorpick("six")}
                    ></div>
                    <div
                      className="small-box seven"
                      onClick={() => colorpick("seven")}
                    ></div>
                    <div
                      className="small-box eight"
                      onClick={() => colorpick("eight")}
                    ></div>
                    <div
                      className="small-box nine"
                      onClick={() => colorpick("nine")}
                    ></div>
                    <div
                      className="small-box ten"
                      onClick={() => colorpick("ten")}
                    ></div>
                    <div
                      className="small-box eleven"
                      onClick={() => colorpick("eleven")}
                    ></div>
                    <div
                      className="small-box twelve"
                      onClick={() => colorpick("twelve")}
                    ></div>
                    <div
                      className="small-box thirteen"
                      onClick={() => colorpick("thirteen")}
                    ></div>
                    <div
                      className="small-box fourteen"
                      onClick={() => colorpick("fourteen")}
                    ></div>
                    <div
                      className="small-box fifteen"
                      onClick={() => colorpick("fifteen")}
                    ></div>
                    <div
                      className="small-box sixteen"
                      onClick={() => colorpick("sixteen")}
                    ></div>
                  </div>
                )}
                {clicked && (
                  <div className="d-flex justify-content-center button">
                    <button className="btn btn-success" onClick={click}>
                      pick a color
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
