import MainContainer from "../../components/MainContainer";
import {useRouter} from "next/router";
import Image from 'next/image'
import Link from "next/link";

const myLoader = ({ src, width, quality }) => {
    return `http://prokansk.ru${src}?w=${width}&q=${quality || 75}`
}

export default function bloglimontv({user}) {
    const {query} = useRouter()
    return (
        <MainContainer keywords={"sdfgsdfgsdfg"}>

            <section className="page-header style-2">
                <div className="container">
                    <div className="page-title text-center">
                        <h3>{user.name}</h3>
                        <ul className="breadcrumb">
                            <li>
                                <Link href="/">
                                    <a>Главная</a>
                                </Link>
                            </li>
                            <li>{user.name}</li>
                        </ul>
                    </div>
                </div>
            </section>


            <div className="blog-section blog-page blog-single padding-tb">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-12">
                                <article>
                                    <div className="post-item">
                                        <div className="post-inner">
                                            <div className="post-thumb">
                                                <Image
                                                    loader={myLoader}
                                                    src="/image/catalog/blog/limon-tv-prokansk.jpg"
                                                    alt={user.name}
                                                    width={710}
                                                    height={470}
                                                />
                                            </div>
                                            <div className="post-content">
                                                <h4>{user.name}</h4>
                                                <div className="meta-post">
                                                    <ul>
                                                        <li>
                                                            <i className="icofont-calendar" />
                                                            <a href="#" className="date">27 December 2019 </a>
                                                        </li>
                                                        <li>
                                                            <i className="icofont-ui-user" />
                                                            <a href="#" className="admin">Rajib Raj</a>
                                                        </li>
                                                        <li>
                                                            <i className="icofont-speech-comments" />
                                                            <a href="#" className="comment">24 Comments</a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <p dangerouslySetInnerHTML={{ __html: user.content1 }} />



                                                <blockquote>
                                                    <p>Данная страница сгенерирована автоматически вируальным автором на основе источника: {user.referal} </p>
                                                    <cite><a href="#">...Мария Хантер</a></cite>
                                                </blockquote>

                                                <div className="tags-section">
                                                    <ul className="tags">
                                                        <li><a href="#">Agency</a></li>
                                                        <li><a href="#">Business</a></li>
                                                        <li><a href="#">Personal</a></li>
                                                    </ul>
                                                    <div className="scocial-media">
                                                        <a href="#" className="facebook">
                                                            <i className="icofont-facebook" />
                                                        </a>
                                                        <a href="#" className="twitter">
                                                            <i className="icofont-twitter" />
                                                        </a>
                                                        <a href="#" className="linkedin">
                                                            <i className="icofont-linkedin" /></a>
                                                        <a href="#" className="vimeo">
                                                            <i className="icofont-vimeo" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="navigations-part">
                                        <div className="left">
                                            <a href="#" className="prev"><i className="icofont-double-left" />Previous
                                                Article</a>
                                            <a href="#" className="title">Evisculate Parallel Processes via Technica
                                                Sound Models Authoritative</a>
                                        </div>
                                        <div className="right">
                                            <a href="#" className="prev">Next Article
                                                <i className="icofont-double-right" />
                                            </a>
                                            <a href="#" className="title">Qvisculate Parallel Processes via Technica
                                                Sound Models Authoritative</a>
                                        </div>
                                    </div>

                                    <div className="authors">
                                        <div className="author-thumb">
                                            <a href="#"><img src="/assets/images/chef/author/01.png" alt="author" /></a>
                                        </div>
                                        <div className="author-content">
                                            <h6>LabArtisan</h6>
                                            <p>Data release Friday large ponted to better than expcted pickup in the
                                                euroz yieldsrose tolate Thursd and the euro edged up slghtly toY after
                                                the Grman recent political uncertainty in Germany has so far</p>
                                            <div className="scocial-media">
                                                <a href="#" className="facebook">
                                                    <i className="icofont-facebook" />
                                                </a>
                                                <a href="#" className="twitter">
                                                    <i className="icofont-twitter" />
                                                </a>
                                                <a href="#" className="linkedin">
                                                    <i className="icofont-linkedin" />
                                                </a>
                                                <a href="#" className="vimeo">
                                                    <i className="icofont-vimeo" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="comments" className="comments">
                                        <h4 className="title-border">02 Comment</h4>
                                        <ul className="comment-list">
                                            <li className="comment" id="li-comment-1">
                                                <div className="com-thumb">
                                                    <img alt="" src="/assets/images/chef/author/01.jpg"
                                                         srcSet="assets/images/chef/author/01.jpg"
                                                         className="avatar avatar-90 photo" height="90" width="90" />
                                                </div>
                                                <div className="com-content">
                                                    <div className="com-title">
                                                        <div className="com-title-meta">
                                                            <h6><a href="http://Sk" rel="external nofollow"
                                                                   className="url">Linsa Faith</a></h6>
                                                            <span> October 5, 2018 at 12:41 pm </span>
                                                        </div>
                                                        <span className="reply">
                                                        <a rel="nofollow" className="comment-reply-link" href="#"
                                                           aria-label="Reply to Masum">
                                                            <i className="icofont-reply-all" />Reply</a>
                                                    </span>
                                                    </div>
                                                    <p>The inner sanctuary, I throw myself down among the tall grass bye
                                                        the trckli stream and, as I lie close to the earth</p>
                                                    <div className="reply-btn"></div>
                                                </div>
                                                <ul className="comment-list">
                                                    <li className="comment" id="li-comment-2">
                                                        <div className="com-thumb">
                                                            <img alt="" src="/assets/images/chef/author/02.jpg"
                                                                 srcSet="assets/images/chef/author/02.jpg"
                                                                 className="avatar avatar-90 photo" height="90"
                                                                 width="90" />
                                                        </div>
                                                        <div className="com-content">
                                                            <div className="com-title">
                                                                <div className="com-title-meta">
                                                                    <h6><a href="http://Sk" rel="external nofollow"
                                                                           className="url">James Jusse</a></h6>
                                                                    <span> October 5, 2018 at 12:41 pm </span>
                                                                </div>
                                                                <span className="reply">
                                                                <a rel="nofollow" className="comment-reply-link"
                                                                   href="#" aria-label="Reply to Masum">
                                                                    <i className="icofont-reply-all" />Reply</a>
                                                            </span>
                                                            </div>
                                                            <p>A wonderful serenity has taken possession of my entire
                                                                soul, like these sweet mornings spring which I enjoy
                                                                with my whole heart</p>
                                                            <div className="reply-btn"></div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                    <div id="respond" className="comment-respond">
                                        <h4 className="title-border">Leave a Comment</h4>
                                        <div className="add-comment">
                                            <form action="#" method="post" id="commentform" className="comment-form">
                                                <input name="name" type="text" value="" placeholder="Name" />
                                                <input name="email" type="text" value="" placeholder="Email" />
                                                <input name="url" type="text" value="" placeholder="Subject" />
                                                <textarea id="comment-reply" name="comment" rows="5"
                                                          placeholder="Type Here Your Comment" />
                                                <p className="comment-form-cookies-consent">
                                                    <input
                                                        id="wp-comment-cookies-consent"
                                                        name="wp-comment-cookies-consent" type="checkbox"
                                                        value="yes" />
                                                    <label htmlFor="wp-comment-cookies-consent">Save
                                                        my name, email, and website in this browser for the next
                                                        time I comment.</label>
                                                </p>
                                                <button type="submit" className="food-btn">
                                                    <span>send comment</span>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-lg-4 col-md-7 col-12">
                                <aside>
                                    <div className="widget widget-search">
                                        <div className="search-wrapper">
                                            <input type="text" name="s" placeholder="Your Search..." />
                                            <button type="submit">
                                                <i className="icofont-search-2" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="widget widget-category">
                                        <div className="widget-header">
                                            <h5>Post Categorys</h5>
                                        </div>
                                        <ul className="widget-wrapper">
                                            <li>
                                                <a href="#"
                                                   className="d-flex flex-wrap justify-content-between"><span>
                                                    <i className="icofont-double-right" />
                                                    Themeforest</span><span>06</span></a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="d-flex flex-wrap justify-content-between"><span>
                                                    <i className="icofont-double-right" />Photodune</span><span>11</span></a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="d-flex flex-wrap justify-content-between"><span>
                                                    <i className="icofont-double-right" />Codecanyon</span><span>07</span></a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="d-flex flex-wrap justify-content-between"><span><i
                                                    className="icofont-double-right" />GRaphicdriver</span><span>09</span></a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="d-flex flex-wrap justify-content-between"><span><i
                                                    className="icofont-double-right" />Wordpress</span><span>50</span></a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="d-flex flex-wrap justify-content-between"><span><i
                                                    className="icofont-double-right" />Joomla</span><span>20</span></a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="d-flex flex-wrap justify-content-between"><span><i
                                                    className="icofont-double-right" />3docean</span><span>93</span></a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="d-flex flex-wrap justify-content-between"><span><i
                                                    className="icofont-double-right" />Themeforest</span><span>27</span></a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="widget widget-post">
                                        <div className="widget-header">
                                            <h5>Most Popular Post</h5>
                                        </div>
                                        <ul className="widget-wrapper">
                                            <li className="d-flex flex-wrap justify-content-between">
                                                <div className="post-thumb">
                                                    <a href="#"><img src="/assets/images/blog/01.jpg" alt="product" /></a>
                                                </div>
                                                <div className="post-content">
                                                    <h6><a href="#">Foulate Revunry And Mhare Fnger Tache Fanny</a></h6>
                                                    <p>04 February 2019</p>
                                                </div>
                                            </li>
                                            <li className="d-flex flex-wrap justify-content-between">
                                                <div className="post-thumb">
                                                    <a href="#"><img src="/assets/images/blog/02.jpg" alt="product" /></a>
                                                </div>
                                                <div className="post-content">
                                                    <h6><a href="#">Foulate Revunry And Mhare Fnger Tache Fanny</a></h6>
                                                    <p>04 February 2019</p>
                                                </div>
                                            </li>
                                            <li className="d-flex flex-wrap justify-content-between">
                                                <div className="post-thumb">
                                                    <a href="#"><img src="/assets/images/blog/03.jpg" alt="product" /></a>
                                                </div>
                                                <div className="post-content">
                                                    <h6><a href="#">Foulate Revunry And Mhare Fnger Tache Fanny</a></h6>
                                                    <p>04 February 2019</p>
                                                </div>
                                            </li>
                                            <li className="d-flex flex-wrap justify-content-between">
                                                <div className="post-thumb">
                                                    <a href="#"><img src="/assets/images/blog/04.jpg" alt="product" /></a>
                                                </div>
                                                <div className="post-content">
                                                    <h6><a href="#">Foulate Revunry And Mhare Fnger Tache Fanny</a></h6>
                                                    <p>04 February 2019</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="widget widget-archive">
                                        <div className="widget-header">
                                            <h5>FoodBuzz Archives</h5>
                                        </div>
                                        <ul className="widget-wrapper">
                                            <li><a href="#"
                                                   className="d-flex flex-wrap justify-content-between"><span><i
                                                className="icofont-double-right" />January</span><span>2019</span></a>
                                            </li>
                                            <li><a href="#"
                                                   className="d-flex flex-wrap justify-content-between"><span><i
                                                className="icofont-double-right" />February</span><span>2018</span></a>
                                            </li>
                                            <li><a href="#"
                                                   className="d-flex flex-wrap justify-content-between"><span><i
                                                className="icofont-double-right" />March</span><span>2017</span></a>
                                            </li>
                                            <li><a href="#"
                                                   className="d-flex flex-wrap justify-content-between"><span><i
                                                className="icofont-double-right" />April</span><span>2016</span></a>
                                            </li>
                                            <li><a href="#"
                                                   className="d-flex flex-wrap justify-content-between"><span><i
                                                className="icofont-double-right" />June</span><span>2015</span></a>
                                            </li>
                                            <li><a href="#"
                                                   className="d-flex flex-wrap justify-content-between"><span><i
                                                className="icofont-double-right" />July</span><span>2014</span></a>
                                            </li>
                                            <li><a href="#"
                                                   className="d-flex flex-wrap justify-content-between"><span><i
                                                className="icofont-double-right" />August</span><span>2013</span></a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="widget widget-instagram">
                                        <div className="widget-header">
                                            <h5>FoodBuzz instagram</h5>
                                        </div>
                                        <ul className="widget-wrapper d-flex flex-wrap justify-content-center">
                                            <li><a href="#"><img src="/assets/images/blog/08.jpg" alt="product" /></a></li>
                                            <li><a href="#"><img src="/assets/images/blog/02.jpg" alt="product" /></a></li>
                                            <li><a href="#"><img src="/assets/images/blog/03.jpg" alt="product" /></a></li>
                                            <li><a href="#"><img src="/assets/images/blog/04.jpg" alt="product" /></a></li>
                                            <li><a href="#"><img src="/assets/images/blog/05.jpg" alt="product" /></a></li>
                                            <li><a href="#"><img src="/assets/images/blog/06.jpg" alt="product" /></a></li>
                                            <li><a href="#"><img src="/assets/images/blog/07.jpg" alt="product" /></a></li>
                                            <li><a href="#"><img src="/assets/images/blog/08.jpg" alt="product" /></a></li>
                                            <li><a href="#"><img src="/assets/images/blog/09.jpg" alt="product" /></a></li>
                                        </ul>
                                    </div>

                                    <div className="widget widget-tags">
                                        <div className="widget-header">
                                            <h5>Popular Tags</h5>
                                        </div>
                                        <ul className="widget-wrapper">
                                            <li><a href="#">envato</a></li>
                                            <li><a href="#">themeforest</a></li>
                                            <li><a href="#">codecanyon</a></li>
                                            <li><a href="#">videohive</a></li>
                                            <li><a href="#">audiojungle</a></li>
                                            <li><a href="#">3docean</a></li>
                                            <li><a href="#">envato</a></li>
                                            <li><a href="#">themeforest</a></li>
                                            <li><a href="#">codecanyon</a></li>
                                        </ul>
                                    </div>

                                    <div className="widget widget-banner">
                                        <div className="widget-header">
                                            <h5>Add Banner Place</h5>
                                        </div>
                                        <ul className="widget-wrapper d-flex flex-wrap justify-content-center">
                                            <li><a href="#"><img src="/assets/images/blog/08.jpg" alt="product" /></a></li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </MainContainer>
    )
};

export async function getServerSideProps({params}) {
    const response = await fetch(`http://prokansk.ru/api/v1/limontv/${params.slug}`)
    const user = await response.json()
    return {
        props: {user}, // will be passed to the page component as props
    }
}

