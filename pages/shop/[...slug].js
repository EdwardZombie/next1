import React, {useState, useEffect} from "react";
import { useRouter } from 'next/router'
import axios from "axios";
import MainContainer from "/components/MainContainer";
import Items from "/components/Items";
import Pagination from "../../components/Pagination";
import TitleCategory from "../../components/TitleCategory"
import TitleSubCategory from "../../components/TitleSubCategory"

const ItemsPage = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [currrentPage, setCurrrentPage] = useState(1)
    const [itemsPerPage] = useState(12)
    const router = useRouter()
    const { slug } = router.query
    const slugarr = slug || []
    useEffect(() => {

        const getItems = async () => {
            setLoading(true)
            const res = await axios.get(`http://prokansk.ru/api/v1/shop/${slugarr[0]}/${slugarr[1]}`)
            setItems(res.data)
            setLoading(false)
        }
        getItems()
    }, [slug])

    const lastItemIndex = currrentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage
    const currentItem = items.slice(firstItemIndex, lastItemIndex)

    const paginate = pageNumber => setCurrrentPage(pageNumber)
    const nextPage = () => setCurrrentPage(prev => prev+1)
    const prevPage = () => setCurrrentPage(prev => prev-1)

    return (
        <MainContainer
            title={"Товары категории / *** / стр. " + currrentPage}
            keywords={"Канск, интернет магазин, онлайн магазин, продукты, продуктовый магазин, доставка продуктов, на дом, страница " + currrentPage}
            description={"Страница " + currrentPage + " с товарами кагории /***/ интернет магазина с доставкой в Канске и районе"}
        >
            <section className="page-header style-2">
                <div className="container">
                    <div className="page-title text-center">
                        <h3>Our Products page</h3>
                        <ul className="breadcrumb">
                            <li><a href="/">Главная</a></li>
                            <li>Shop Page</li>
                        </ul>
                    </div>
                </div>
            </section>


            <div className="shop-page single padding-tb bg-fa">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="shop-title d-flex flex-wrap justify-content-between">
                            <h1><TitleSubCategory items={currentItem} loading={loading} /></h1>
                            <h3><TitleCategory items={currentItem} loading={loading} /></h3>
                        </div>

                        <div className="shop-product-wrap grid row">


                            <Items items={currentItem} loading={loading} />

                        </div>
                        <div className="shop-product-wrap grid row">
                            <Pagination
                                blogsPerPage={itemsPerPage}
                                totalBlogs={items.length}
                                paginate={paginate}
                                currentBlog={currentItem}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </MainContainer>
    )
}

export default ItemsPage;