import React, {useState, useEffect} from "react";
import { useRouter } from 'next/router'
import axios from "axios";
import MainContainer from "/components/MainContainer";
import Items from "/components/Items";
import Pagination from "../../components/Pagination";

const ItemsPage = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [currrentPage, setCurrrentPage] = useState(1)
    const [itemsPerPage] = useState(12)

    const router = useRouter()
    const { slug } = router.query

    useEffect(() => {

        const getItems = async () => {
            setLoading(true)
            const res = await axios.get(`http://prokansk.ru/api/v1/shop/${slug}`)
            setItems(res.data)
            setLoading(false)
        }
        getItems()
    }, [])


    const lastItemIndex = currrentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage
    const currentItem = items.slice(firstItemIndex, lastItemIndex)

    const paginate = pageNumber => setCurrrentPage(pageNumber)
    const nextPage = () => setCurrrentPage(prev => prev+1)
    const prevPage = () => setCurrrentPage(prev => prev-1)


    return (
        <MainContainer keywords={"Объявления, 5 канал, Канск"} title={"Объявления Пятого канала"}>
            <section className="page-header style-2">
                <div className="container">
                    <div className="page-title text-center">
                        <h3>Our Products page</h3>
                        <ul className="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li>Shop Page</li>
                        </ul>
                    </div>
                </div>
            </section>


            <div className="shop-page single padding-tb bg-fa">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="shop-title d-flex flex-wrap justify-content-between">
                            <p>Showing 01 - 12 of 139 Results</p>
                            <div className="product-view-mode">
                                <a className="active" data-target="grid"><i className="icofont-ghost" /></a>
                            </div>
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
    );
};

export default ItemsPage;