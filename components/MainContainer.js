import Head from "next/head";
import Link from "next/link";
import MainCategoryMenu from "../components/MainCategoryMenu";


const MainContainer = ({children, keywords, title, description}) => {
    return (
        <>
            <Head>

                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link rel="shortcut icon" href="/assets/images/favicon.png" type="image/png" />

                <title>{title}</title>
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
                <meta name="author" content="Веб студия Zoomcode.ru" />



            </Head>


            <div className="search-area">
                <div className="search-input">
                    <div className="search-close">
                        <span />
                        <span />
                    </div>
                    <form>
                        <input type="text" name="text" placeholder="Поиск ......." />
                            <button className="search-btn"><span className="serch-icon"><i
                                className="icofont-search-2" /></span></button>
                    </form>
                </div>
            </div>


            <div className="mobile-menu">
                <nav className="mobile-header">
                    <div className="header-logo">
                        <Link href="/">
                        <a>
                            <img src="/assets/images/logo/01.png" alt="logo" />
                        </a>
                        </Link>
                    </div>
                    <div className="header-bar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
                <nav className="mobile-menu">
                    <div className="mobile-menu-area">
                        <div className="mobile-menu-area-inner">
                            <ul>
                                <li className="active">
                                    <a href="/">Главная</a>
                                </li>
                                <li><a href="/shop">Магазин</a>
                                    <ul>
                                        <MainCategoryMenu></MainCategoryMenu>
                                    </ul>
                                </li>


                                <li>
                                    <a href="#">Блог</a>
                                    <ul>
                                        <li><a href="blog.html">Blog Style 1</a></li>
                                        <li>
                                            <Link href="/blog5kanal">
                                            <a>Объявления 5 канал</a>
                                            </Link>
                                        </li>
                                        <li><a href="blog-single.html">Объявления ЛимонТВ</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Блог</a></li>

                                <li><a href="/contact">Контакты</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>


            <header className="header-section">
                <div className="header-area">
                    <div className="header-top">
                        <div className="container">
                            <div className="top">
                                <ul className="left">
                                    <li>
                                        <i className="far fa-clock" /> Пн-Вс: 9:00 - 23:00
                                    </li>
                                    <li>
                                        <i className="fas fa-map-marker-alt" /> Г. Канск и Канский район
                                    </li>
                                    <li>
                                        <i className="fas fa-headset" /> prokanskpetrov@yandex.ru
                                    </li>
                                </ul>
                                <ul className="right">
                                    <li>
                                        <Link href="#">
                                        <a><i className="fab fa-twitter" /></a>
                                        </Link>
                                    </li>
                                    <li><Link href="#"><a><i className="fab fa-vimeo-v" /></a></Link></li>
                                    <li><Link href="#"><a><i className="fas fa-futbol" /></a></Link></li>
                                    <li><Link href="#"><a><i className="fab fa-behance" /></a></Link></li>
                                    <li><Link href="#"><a><i className="fas fa-wifi" /></a></Link></li>
                                    <li><Link href="#"><a><i className="fab fa-instagram" /></a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom">
                        <div className="container">
                            <div className="primary-menu">
                                <div className="logo">
                                    <Link href="/">
                                    <a>
                                        <img src="/assets/images/logo/01.png" alt="logo" />
                                    </a>
                                    </Link>
                                </div>
                                <div className="main-area">
                                    <div className="main-menu">
                                        <ul>
                                            <li className="active">
                                                <Link href="/">
                                                <a href="/">Главная</a>
                                                </Link>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link href="/shop">
                                                <a>Магазин</a>
                                                </Link>
                                                <ul><MainCategoryMenu></MainCategoryMenu></ul>

                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link href="/blog">
                                                <a>Блог</a>
                                                </Link>
                                                <ul>
                                                    <li>
                                                        <Link href="/blog/prokansk">
                                                        <a>Статьи</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog5kanal">
                                                            <a>Объявления 5 канал</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/bloglimontv">
                                                            <a>Объявления Лимон ТВ</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/about">
                                                    <a>О нас</a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/contact">
                                                    <a>Контакты</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="cart-search">
                                        <ul>
                                            <li className="search"><i className="icofont-search-2" /></li>



                                            <li className="cart-area">
                                                <div className="cart-icon">
                                                    <i className="icofont-cart-alt" />
                                                </div>
                                                <div className="count-item">04</div>
                                                <div className="cart-content">
                                                    <div className="cart-title">
                                                        <div className="add-item">4 Items Added</div>
                                                        <div className="list-close"><a href="#">Close</a></div>
                                                    </div>
                                                    <div className="cart-scr scrollbar">
                                                        <div className="cart-con-item">
                                                            <div className="cart-item">
                                                                <div className="cart-inner">
                                                                    <div className="cart-top">
                                                                        <div className="thumb">
                                                                            <a href="#"><img src="/assets/images/product/01.jpg" alt="" /></a>
                                                                        </div>
                                                                        <div className="content">
                                                                            <a href="#">Split Remedy Split End
                                                                                Shampoo</a>
                                                                        </div>
                                                                        <div className="remove-btn">
                                                                            <a href="#"><i className="icofont-close" /></a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cart-bottom">
                                                                        <div className="sing-price">Tk. 140</div>

                                                                        <div className="total-price">Tk. 280.00</div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="cart-scr-bottom">
                                                        <ul>
                                                            <li>
                                                                <div className="title">Subtotal</div>
                                                                <div className="price">Tk. 1045.00</div>
                                                            </li>
                                                            <li>
                                                                <div className="title">Shipping</div>
                                                                <div className="price">Tk. 40.00</div>
                                                            </li>
                                                            <li>
                                                                <div className="title">Cart Total</div>
                                                                <div className="price">Tk. 1085.00</div>
                                                            </li>
                                                        </ul>
                                                        <a href="#" className="food-btn"><span>Place Order</span></a>
                                                    </div>
                                                </div>
                                            </li>




                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <div>
                {children}
            </div>


            <div className="news_link">
                <div className="container">
                    <div className="order-content">
                        <div className="content-logo">
                            <a href="#">
                                <img src="/assets/images/logo/02.png" alt="logo" />
                                    <p>Good Food For Good Helts</p>
                            </a>
                        </div>
                        <div className="content-link">
                            <ul>
                                <li>
                                    <h5>Work with best resturant theme</h5>
                                </li>
                                <li>
                                    <a href="#" className="food-btn style-2">
                                        <span>Order Now</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>




            <footer className="padding-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                            <div className="contant-info">
                                <h5>Контактная информация</h5>
                                <ul className="info">
                                    <li>
                                        <i className="fas fa-home"></i>
                                        <span>Suite 02 Level Tropical Center</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-phone"></i>
                                        <span>+880 1234 567890, 025984712</span>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fas fa-globe-asia"></i>
                                            <span>www.foodbuzz@gmail,com</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fas fa-headphones"></i>
                                            <span>support@codexcoder.com</span>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                            <div className="opening-time">
                                <h5>Opening Hours</h5>
                                <ul>
                                    <li>
                                        <p><i className="far fa-clock"></i>Понедельник</p>
                                        <span>09:00 - 23:00</span>
                                    </li>
                                    <li>
                                        <p><i className="far fa-clock"></i>Вторник</p>
                                        <span>09:00 - 23:00</span>
                                    </li>
                                    <li>
                                        <p><i className="far fa-clock"></i>Среда</p>
                                        <span>09:00 - 23:00</span>
                                    </li>
                                    <li>
                                        <p><i className="far fa-clock"></i>Четверг</p>
                                        <span>09:00 - 23:00</span>
                                    </li>
                                    <li>
                                        <p><i className="far fa-clock"></i>Пятница</p>
                                        <span>09:00 - 23:00</span>
                                    </li>
                                    <li>
                                        <p><i className="far fa-clock"></i>Суббота</p>
                                        <span>10:00 - 22:00</span>
                                    </li>
                                    <li>
                                        <p><i className="far fa-clock"></i>Воскресенье</p>
                                        <span>11:00 - 21:00</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                            <div className="news_letter">
                                <h5>Подписка</h5>
                                <p>
                                    Подпишитесь на наши новости чтобы быть в курсе наших акций, событий и новостей.
                                </p>
                                <div className="contact-search">
                                    <form className="searchForm" method="get" action="0">
                                        <input className="searchTerm" placeholder="Your Email" autoComplete="off" />
                                            <input type="submit" className="searchBtn" />
                                    </form>
                                </div>
                                <ul className="follow_us">
                                    <li>
                                        <p>Сети, мессенджеры : </p>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fas fa-wifi"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fas fa-globe"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-behance"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


            <div className="fotter-header">
                <header>
                    <div className="footer-bg">
                        <div className="container">
                            <div className="header-item">
                                <div className="header-logo">
                                    <p>&copy; 2020<a href="index.html">FoodBuzz</a>Designed by<a
                                        href="https://themeforest.net/user/labartisan">Labartisan</a></p>
                                </div>
                                <div className="header-menu d-none d-lg-block">
                                    <nav className="primary-menu">
                                        <div className="main-menu-area">
                                            <ul className="main-menu">
                                                <li>
                                                    <Link href="/">
                                                    <a>Главная</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop">
                                                    <a>Магазин</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop">
                                                    <a href="/blog">Блог</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop">
                                                    <a>Объявления</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/about">
                                                    <a>О нас</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/reklama">
                                                    <a>Реклама</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/contact">
                                                    <a>Контакты</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

            <a href="#" className="scrollToTop"><i className="icofont-swoosh-up"></i></a>

            <script src="/assets/js/jquery.js"></script>
            <script src="/assets/js/fontawesome.min.js"></script>
            <script src="/assets/js/waypoints.min.js"></script>
            <script src="/assets/js/bootstrap.min.js"></script>
            <script src="/assets/js/isotope.pkgd.min.js"></script>
            <script src="/assets/js/wow.min.js"></script>
            <script src="/assets/js/swiper.min.js"></script>
            <script src="/assets/js/progress.js"></script>
            <script src="/assets/js/tab.js"></script>
            <script src="/assets/js/lightcase.js"></script>
            <script src="/assets/js/jquery.countdown.min.js"></script>
            <script src="/assets/js/functions.js"></script>

        </>
    );
};

export default MainContainer;