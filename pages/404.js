import MainContainer from "../components/MainContainer";
import Link from "next/link";

export default function Error() {
    return (
        <MainContainer keywords={"sdfgsdfgsdfg"} title={"Главная Индекс"}>

            <section className="page-header style-2">
                <div className="container">
                    <div className="page-title text-center">
                        <h3>404 страница ошибки</h3>
                        <ul className="breadcrumb">
                            <li>
                                <Link href="/">
                                <a>Главная</a>
                                </Link>
                            </li>
                            <li>Страница 404</li>
                        </ul>
                    </div>
                </div>
            </section>


            <section className="fore-zero padding-tb">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-xl-6 col-lg-6 col-12">
                            <div className="fore-zero-thumb">
                                <img src="/assets/images/404.png" alt="404_image" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-12">
                            <div className="fore-zero-content">
                                <h2><span>Извините!</span></h2>
                                <h3>Страница не существует</h3>
                                <p>Извините, эта страница не существует.</p>
                                <p>Нажав на кнопку ниже вы сможете перейти на главную страницу.</p>
                                <Link href="/">
                                    <a className="food-btn">
                                        <span>На главную</span>

                                    </a>
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </MainContainer>
    )
};