import MainContainer from "../components/MainContainer";
import Link from "next/link";
import React from "react";

const Contact = () => {
    return (
        <MainContainer
            title={"Бегущая строка телеканала Канск 5 канал стр. "}
            keywords={"Объявления, Канск 5 канал, бегущая строка, Канск, страница "}
            description={"Страница бегущей строки от телеканала Канск 5 канал"}
        >
            <section className="page-header style-2">
                <div className="container">
                    <div className="page-title text-center">
                        <h3>Контактная информация</h3>
                        <ul className="breadcrumb">
                            <li>
                                <Link href="/">
                                    <a>Главная</a>
                                </Link>
                            </li>
                            <li>Раздел контакты</li>
                        </ul>
                    </div>
                </div>
            </section>


            <section className="contact-information">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <h5>Контактная информация</h5>
                                <div className="post-item">
                                    <div className="post-content">
                                        <h6>Адрес:</h6>
                                        <p>663600, Россия, Красноярский край</p>
                                        <p>г. Канск, ул. 40 лет Октября, 62/4</p>
                                    </div>
                                </div>
                                <div className="post-item">
                                    <div className="post-content">
                                        <h6>Номер телефона:</h6>
                                        <p>+7(991)500-27-12</p>
                                    </div>
                                </div>
                                <div className="post-item">
                                    <div className="post-content">
                                        <h6>Email Адрес: </h6>
                                        <p>prokanskpetrov@yandex.ru</p>
                                    </div>
                                </div>
                                <div className="post-item">
                                    <div className="post-content">
                                        <h6>Адрес сайта:</h6>
                                        <p>http://prokansk.ru</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <h5>Отправить сообщение</h5>
                                <form className="d-flex flex-wrap justify-content-between">
                                    <input type="text" placeholder="Введите Ваше Имя" />
                                        <input type="text" placeholder="Ваш Email" />
                                                <textarea rows="8" placeholder="Напишите сообщение" />
                                                <button type="submit" className="food-btn style-2">
                                                    <span>Отправить</span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





        </MainContainer>
    );
};

export default Contact;