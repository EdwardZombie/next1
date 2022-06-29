import Link from "next/link";
import Image from 'next/image';
import Head from "next/head";
import MainContainer from "../components/MainContainer";

const myLoader = ({ src, width, quality }) => {
    return `http://prokansk.ru${src}?w=${width}&q=${quality || 75}`
}

function toTimestamp(strDate){
    var datum = Date.parse(strDate);
    var a = new Date(datum);
    var months = ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = year + ' ' + month + ' ' + date;
    return time;
}

function Blog5({blog5kList}) {


    return (

        <MainContainer keywords={"Объявления, 5 канал, Канск"} title={"Объявления Пятого канала"}>


            <section className="page-header style-2">
                <div className="container">
                    <div className="page-title text-center">
                        <h3>Канск 5 канал объявления</h3>
                        <ul className="breadcrumb">
                            <li>
                                <Link href="/">
                                    <a>Главная</a>
                                </Link>
                            </li>
                            <li>Бегущая строка телеканала Канск 5 канал</li>
                        </ul>
                    </div>
                </div>
            </section>


            <section className="blog-section blog-page padding-tb">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="row justify-content-center">



                            {blog5kList.map(blog5k =>
                            <div className="col-lg-4 col-sm-6 col-12" key={blog5k.id}>
                                <div className="post-item">
                                    <div className="post-item-inner">
                                        <div className="post-thumb">

                                            <Link href={`/blog5/${blog5k.slug}`}>
                                            <a>
                                                <Image
                                                    loader={myLoader}
                                                    src={blog5k.photo1}
                                                    alt={blog5k.name}
                                                    width={388}
                                                    height={294}
                                                />
                                            </a>
                                            </Link>


                                        </div>
                                        <div className="post-content">
                                            <h5>
                                                <Link href={`/blog5/${blog5k.slug}`}>
                                                    <a>{blog5k.name}</a>
                                                </Link>
                                            </h5>
                                            <div className="author-date">
                                                <a href="#" className="date"><i className="icofont-calendar" />
                                                    {toTimestamp(blog5k.created_at.toString())}
                                                </a>
                                                <a href="#" className="admin"><i className="icofont-ui-user" />Аня</a>
                                            </div>
                                            <p>{blog5k.content1}</p>
                                            <div className="post-footer">
                                                <Link href={`/blog5/${blog5k.slug}`}>
                                                <a className="text-btn">Читать<i
                                                    className="icofont-double-right" /></a>
                                                </Link>
                                                <Link href={`/blog5/${blog5k.slug}`}>
                                                <a className="comments">
                                                    <i className="icofont-comment" /><span>9</span>
                                                </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}


                        </div>
                        <div className="paginations">
                            <ul className="d-flex flex-wrap justify-content-center">
                                <li>
                                    <a href="#">1</a>
                                </li>
                                <li className="d-none d-sm-block">
                                    <a href="#">2</a>
                                </li>
                                <li className="d-none d-sm-block">
                                    <a href="#">3</a>
                                </li>
                                <li>
                                    <a className="dot">...</a>
                                </li>
                                <li className="d-none d-sm-block">
                                    <a href="#">9</a>
                                </li>
                                <li className="d-none d-sm-block">
                                    <a href="#">10</a>
                                </li>
                                <li>
                                    <a href="#">11</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>



        </MainContainer>

    );
};

export async function getStaticProps(context) {
    const res = await fetch(`http://prokansk.ru/api/v1/5tv/`)
    const blog5kList = await res.json()

    return {
        props: {
            blog5kList,
        },
    }
}

export default Blog5;