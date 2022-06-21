import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <title>Главная страница</title>
                <meta keywords={keywords}></meta>
            </Head>

            <div className="navbar">
                <A href={'/'} text="Главная" />
                <A href={'/users'} text="Пользователи" />
            </div>
            <div>
                {children}
            </div>

        </>
    );
};

export default MainContainer;