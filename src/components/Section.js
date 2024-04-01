import React, {useState} from "react";
import { Waypoint } from 'react-waypoint';
import 'animate.css';

import board from "../img/board.png";
import rook from "../img/rook.png";
import pawn from "../img/chess.png";
import queen from "../img/queen.png";
import king from "../img/king.png";
import strategy from "../img/strategy.png";
const Section = () => {
  const [animationsStarted, setAnimationsStarted] = useState(false);

  const handleWaypointEnter = () => {
    console.log("handle waypoint started")
    if (!animationsStarted) {
      setAnimationsStarted(true);
      document.getElementById('element1').classList.add('animate__animated', 'animate__lightSpeedInRight');
      document.getElementById('element2').classList.add('animate__animated', 'animate__lightSpeedInRight');
      document.getElementById('element3').classList.add('animate__animated', 'animate__lightSpeedInRight');
      document.getElementById('element4').classList.add('animate__animated', 'animate__lightSpeedInRight');
      document.getElementById('element5').classList.add('animate__animated', 'animate__lightSpeedInRight');
    }
  };
  return (

    <div>    
      <Waypoint onEnter={handleWaypointEnter} topOffset='50%'/>
    
      <div className="h-100 grid grid-cols-2 gap-4 content-center section-background ">
        <div className="pl-5">
          <img src={board} className="chess-image"></img>
        </div>
        <div className=" my-auto">
          <div className="w-3/4 flex my-2 custom-item animate__delay-1s"  id="element1">
            <div className="w-1/10  ">
              <img src={pawn} className="figure-icon"></img>
            </div>
            <div className=" text-white my-auto"><p className="text-left">Pawns, hold the potential for<br></br> advancement, becoming formidable<br></br>  forces upon promotion.</p></div>
          </div>
          <div className="custom-margin-left-1">
            {" "}
            <div className="w-3/4 flex my-2 custom-item animate__delay-2s"  id="element2">
              <div className="w-1/10 ">
                <img src={queen} className="figure-icon"></img>
              </div>
              <div className=" text-white my-auto">
                <p className="text-left">The queen commands unparalleled<br></br> versatility, dominating the board with her <br></br>wide-ranging moves.</p>
            
              </div>
            </div>
          </div>
          <div className="custom-margin-left-2">
            {" "}
            <div className="w-3/4 flex my-2 custom-item animate__delay-3s"  id="element3">
              <div className="w-1/10 ">
                <img src={king} className="figure-icon"></img>
              </div>
              <div className=" text-white my-auto">
                <p className="text-left">Protecting the king  stands asthe foremost<br></br>  objective, as its capture signifies  defeat in the<br></br>  game's pursuit.</p>
            
              </div>
            </div>
          </div>

          <div className="custom-margin-left-1">
            {" "}
            <div className="w-3/4 flex my-2 custom-item animate__delay-4s"  id="element4">
              <div className="w-1/10 ">
                <img src={rook} className="figure-icon"></img>
              </div>
              <div className=" text-white my-auto">
                <p className="text-left">   The rook maneuvers across ranks and  files<br></br>  with strategic finesse, influencing the <br></br>  chessboard's dynamics significantly.</p>
            
              </div>
            </div>
          </div>
          <div className="w-3/4 flex my-2 custom-item animate__delay-5s" id="element5">
            <div className="w-2/10  ">
              <img src={strategy} className="figure-icon"></img>
            </div>
            <div className="w-8/10 text-white my-auto">  <p className="text-left">   
            The knight's distinctive L-shaped movements <br></br>bring unpredictability to strategic gameplay,<br></br> rendering it a valuable asset in chess tactics.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section;
