import React from "react";
import Header from "../components/header";
import "../css/home.css";
import ImageContainer from "../container/imageContainer";
import Calendor from "../container/calendorContainer";
import About from "./about";
import Services from "./services";
import Gallery from "./gallery";
import Todo from "./todo";
import Review from "./review";
import Form from "./form";
function Home() {
    return (
        <div >
            <Header />
            <div className="inner-wrapper">
                <div className="Home-Page-Heading">
                    <i className="ferofly">Ferofly</i>
                    <div className="sub-heading"><span className="special">-</span>Magnify your Journey<span className="special">-</span></div>
                </div>

                <ImageContainer />
                <Calendor />
                <About />
                <Services />
                <Gallery />
                <Todo />
                ]<Review />
                <Form />
            </div>
        </div>
    )
}
export default Home;