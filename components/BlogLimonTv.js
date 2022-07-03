import React from 'react';
import Link from "next/link";
import Image from "next/image";

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

const Blogs5K = ({ blogs, loading }) => {
    if(loading) {
        return <h2>Загрузка бегущей строки Лимон-ТВ...</h2>
    }
    return (
        <>

            {blogs.map(blogLimontv =>
                <div className="col-lg-4 col-sm-6 col-12" key={blogLimontv.id}>
                    <div className="post-item">
                        <div className="post-item-inner">
                            <div className="post-thumb">

                                <Link href={`/bloglimontv/${blogLimontv.slug}`}>
                                    <a>
                                        <Image
                                            loader={myLoader}
                                            src="/image/catalog/blog/limon-tv-prokansk.jpg"
                                            alt={blogLimontv.name}
                                            width={388}
                                            height={294}
                                        />
                                    </a>
                                </Link>


                            </div>
                            <div className="post-content">
                                <h5>
                                    <Link href={`/bloglimontv/${blogLimontv.slug}`}>
                                        <a>{blogLimontv.name}</a>
                                    </Link>
                                </h5>
                                <div className="author-date">
                                    <a href="#" className="date"><i className="icofont-calendar" />
                                        {toTimestamp(blogLimontv.created_at.toString())}
                                    </a>
                                    <a href="#" className="admin"><i className="icofont-ui-user" />Аня</a>
                                </div>
                                <p>Объявления от Лимон ТВ от {toTimestamp(blogLimontv.created_at.toString())}</p>
                                <div className="post-footer">
                                    <Link href={`/bloglimontv/${blogLimontv.slug}`}>
                                        <a className="text-btn">Читать<i
                                            className="icofont-double-right" /></a>
                                    </Link>
                                    <Link href={`/blog5/${blogLimontv.slug}`}>
                                        <a className="comments">
                                            <i className="icofont-comment" /><span>0</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>

    );
};

export default Blogs5K

