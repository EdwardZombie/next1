import React from 'react';
import Link from "next/link";
import Image from "next/image";


const myLoader = ({ src, width, quality }) => {
    return `http://prokansk.ru${src}?w=${width}&q=${quality || 75}`
}


const Items = ({ items, loading }) => {

    if(loading) {
        return <h3>Подгружаю товары магазина...</h3>
    }

    return (
        <>

            {items.map(item =>

                <div className="col-xl-3 col-md-6 col-12" key={item.id}>
                    <div className="product-item">
                        <div className="product-thumb">

                            <Image
                                loader={myLoader}
                                src={item.image1}
                                alt={item.name}
                                width={388}
                                height={294}
                            />
                            <span className="price">{item.price}</span>
                            <div className="product-action-link">

                                <a href="assets/images/product/01.jpg" data-rel="lightcase"><i
                                    className="icofont-eye" /></a>
                                <a href="#"><i className="icofont-heart-alt" /></a>
                                <a href="#"><i className="icofont-cart-alt" /></a>
                            </div>
                        </div>
                        <div className="product-content">
                            <div className="product-title">
                                <span className="cat-name">{item.category}</span>
                                <h6>
                                    <Link href={item.slug}>
                                    <a>{item.name}</a>
                                    </Link>
                                </h6>
                                <div className="rating">
                                    <i className="icofont-star" />
                                    <i className="icofont-star" />
                                    <i className="icofont-star" />
                                    <i className="icofont-star" />
                                    <i className="icofont-star" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )}
            
        </>
    );
};

export default Items;