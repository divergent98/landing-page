import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CarouselCard from "./CarouselCard";
import lose from "../img/lose.png";
import charter from "../img/charter.png";
import chessboard from "../img/chess-board.png";
import chessclock from "../img/chess-clock.png";
import searching from "../img/searching.png";
const CarouselCards = () => (
<OwlCarousel className='owl-theme' loop items={1} >
    <div className='item '>
    <CarouselCard
              content="Achieving checkmate in chess requires strategic prowess and foresight, where one player's pieces corner the opponent's king, signaling victory."
              title="Checkmate"
              image={lose}
    />
    </div>
    <div class='item'>
    <CarouselCard
              content="Chess certificates serve as tangible recognition of skill and dedication, often awarded for achievements such as tournament wins or successful completion of chess courses."
              title="Certificates"
              image={charter}
            />
    </div>
    <div class='item'>
    <CarouselCard
              content="The chessboard, with its 64 squares alternating in colors, forms the battleground where players maneuver their pieces to execute cunning strategies and achieve victory"
              title="Chessboard"
              image={chessboard}
            />
    </div>
    <div class='item'>
    <CarouselCard
              content="A timer is a crucial tool in competitive chess, adding an element of urgency and pressure as players must make their moves within specified time constraints, enhancing the thrill of the game."
              title="Timer"
              image={chessclock}
            />
    </div>
    <div class='item'>
    <CarouselCard
              content="Chess research continually evolves understanding of the game, exploring intricate tactics, openings, and endgame strategies, contributing to the ongoing enrichment of chess theory and practice"
              title="Research"
              image={searching}
            />
    </div>
</OwlCarousel>
  )


export default CarouselCards