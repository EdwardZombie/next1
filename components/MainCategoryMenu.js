import React, {useState, useEffect} from "react";
import Link from "next/link";

const fetchURL = "http://prokansk.ru/api/v1/shopcategoryes/";
const getItems = () => fetch(fetchURL).then(res => res.json());

function List({ items, fallback }) {
    if (!items || items.length === 0) {
        return fallback;
    } else {
        return items.map(item => {
            return <li key={item.id}>
            <Link href={`/shop/${item.slug}`}>
                <a>
                    {item.name}
                </a>
            </Link>
                <ul>
                {item.children.map(sub =>
                <li>
                    <Link href={`/shop/${item.slug}/${sub.slug}`} key={sub.id}>
                        <a>
                    {sub.name}
                        </a>
                    </Link>
                </li>
                    )}
                </ul>
            </li>;
        });
    }
}

function MainCategoryMenu() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems().then(data => setItems(data));
    }, []);

    return (
        <div>
            <List items={items} fallback={" Загружаю меню... "} />
        </div>
    );
}

export default MainCategoryMenu;