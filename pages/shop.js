import MainContainer from "/components/MainContainer";
import React, {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";

const fetchURL = "http://prokansk.ru/api/v1/shopallcategoryes/";
const getItems = () => fetch(fetchURL).then(res => res.json());


const myLoader = ({ src, width, quality }) => {
    return `http://prokansk.ru${src}?w=${width}&q=${quality || 75}`
}


function List({ items, fallback }) {
    if (!items || items.length === 0) {
        return fallback;
    } else {
        return items.map(item => {
            if(item.mptt_level == 0){
                return <div className="col-lg-12 col-sm-12 col-12" key={item.id}>
                    <div className="post-item">
                        <div className="post-item-inner">
                            <div className="post-content">
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                </div>;
            } else {
                return <div className="col-lg-4 col-sm-6 col-12" key={item.id}>
                    <div className="post-item">
                        <div className="post-item-inner">
                            <div className="post-thumb">

                                <Link href="/shop[slug]" as={`/shop/${item.slug}`}>
                                    <a>
                                        <Image
                                            loader={myLoader}
                                            src={item.img_categoryProduct}
                                            alt={item.name}
                                            width={388}
                                            height={294}
                                        />
                                    </a>
                                </Link>


                            </div>
                            <div className="post-content">
                                <h5>
                                    <Link href="/shop[slug]" as={`/shop/${item.slug}`}>
                                        <a>{item.name}</a>
                                    </Link>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>;
            }
        });
    }
}

const Shop = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems().then(data => setItems(data));
    }, []);

    return (
        <MainContainer
            keywords={"Купить, продукты, онлайн, в Канске, с доставкой, на дом"}
            title={"Разделы и подразделы онлайн магазина продуктов в Канске"}
            description={"Раздел содержит все катерии продуктового интернет магазина города Канска"}
        >
            <section className="page-header style-2">
                <div className="container">
                    <div className="page-title text-center">
                        <h3>Категории магазина</h3>
                        <ul className="breadcrumb">
                            <li>
                                <Link href="/">
                                    <a>Главная</a>
                                </Link>
                            </li>
                            <li>Категории и подкатегории нашего магазина</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="blog-section blog-page padding-tb">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="row justify-content-center">
        <List items={items} fallback={" Загружаю категории... "} />
                        </div>
                    </div>
                </div>
            </section>
        </MainContainer>
    );
};

export default Shop;