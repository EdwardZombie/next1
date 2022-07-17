import React from 'react';

const TitleCategory = ({ items, loading }) => {
    if(loading) {
        return <h3>Загрузка...</h3>
    }
        const ti = items.map((item, index) => {
            if(index == 0){
                var title = item['category_main']
                return <>
                    <h1>{title}</h1>
                </>
            }
            console.log(title)
        })

return ti
}

export default TitleCategory;