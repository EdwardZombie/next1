import React, {useState, useEffect} from "react";
import axios from "axios";
import BlogLimonTv from "../components/BlogLimonTv";
import Pagination from "../components/Pagination";
import MainContainer from "/components/MainContainer";
import Link from "next/link";


const bloglimontv = () => {

    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false)
    const [currrentPage, setCurrrentPage] = useState(1)
    const [blogsPerPage] = useState(15)

    useEffect(() => {
        const getBlogs = async () => {
            setLoading(true)
            const res = await axios.get('http://prokansk.ru/api/v1/limontv/')
            setBlogs(res.data)
            setLoading(false)
        }
        getBlogs()
    }, [])

    const lastBlogIndex = currrentPage * blogsPerPage
    const firstBlogIndex = lastBlogIndex - blogsPerPage
    const currentBlog = blogs.slice(firstBlogIndex, lastBlogIndex)

    const paginate = pageNumber => setCurrrentPage(pageNumber)
    const nextPage = () => setCurrrentPage(prev => prev+1)
    const prevPage = () => setCurrrentPage(prev => prev-1)

    return (
        <MainContainer
            title={"Бегущая строка Лимон ТВ стр. " + currrentPage}
            keywords={"Объявления, Лимон ТВ, бегущая строка, Канск, страница " + currrentPage}
            description={"Страница " + currrentPage + " бегущей строки от телеканала Лимон ТВ город Канск"}
        >
            <section className="page-header style-2">
                <div className="container">
                    <div className="page-title text-center">
                        <h3>Объявления телеканала Лимон ТВ</h3>
                        <ul className="breadcrumb">
                            <li>
                                <Link href="/">
                                    <a>Главная</a>
                                </Link>
                            </li>
                            <li>Бегущая строка телеканала Лимон ТВ</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="blog-section blog-page padding-tb">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="row justify-content-center">

                            <BlogLimonTv blogs={currentBlog} loading={loading} />
                        </div>
                        <Pagination
                            blogsPerPage={blogsPerPage}
                            totalBlogs={blogs.length}
                            paginate={paginate}
                            currentBlog={currentBlog}
                        />
                    </div>
                </div>
            </section>
        </MainContainer>
    );
};

export default bloglimontv;