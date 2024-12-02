import About from "../About/About";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Books></Books>
            <Slider></Slider>
        </div>
    );
};

export default Home;