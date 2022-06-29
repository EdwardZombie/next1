import Link from "next/link";
import Head from "next/head";
import MainContainer from "../components/MainContainer";


const Index = () => {
    return (
        <MainContainer keywords={"sdfgsdfgsdfg"} title={"Главная Индекс"}>

            <section className="banner-area bg_size">
                <div className="overlay"></div>
                <div className="container">
                    <div className="banner-content text-center">
                        <span>Welcome to our foodbuzz</span>
                        <h2>It's The Food You Love</h2>
                        <h3>best for restaurant wordpress theme</h3>
                        <div className="banner-btn-group">
                            <a href="#" className="food-btn"><span>Order Now</span></a>
                            <a href="reserv.html" className="food-btn style-2"><span>Book A Table</span></a>
                        </div>
                    </div>
                </div>
            </section>

        </MainContainer>
    );
};

export default Index;