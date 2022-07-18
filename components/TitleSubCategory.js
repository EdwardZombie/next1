import React from 'react';

const TitleSubCategory = ({ items, loading }) => {
    if(loading) {
        return <h3>Загрузка...</h3>
    }
    const ti = items.map((item, index) => {
        if(index == 0){
            var title = item['category']
            return title
        }
    })

    return ti
}

export default TitleSubCategory;