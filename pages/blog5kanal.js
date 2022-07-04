import React, {useState, useEffect} from "react";
import axios from "axios";
import Blogs5k from "../components/Blogs5k";
import Pagination from "../components/Pagination";
import MainContainer from "/components/MainContainer";
import Link from "next/link";


const Blog5Kanal = () => {

    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false)
    const [currrentPage, setCurrrentPage] = useState(1)
    const [blogsPerPage] = useState(15)

    useEffect(() => {
        const getBlogs = async () => {
            setLoading(true)
            const res = await axios.get('http://prokansk.ru/api/v1/5tv/')
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
            title={"Бегущая строка телеканала Канск 5 канал стр. " + currrentPage}
            keywords={"Объявления, Канск 5 канал, бегущая строка, Канск, страница " + currrentPage}
            description={"Страница " + currrentPage + " бегущей строки от телеканала Канск 5 канал"}
        >
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

            <Blogs5k blogs={currentBlog} loading={loading} />
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

export default Blog5Kanal;