import {useEffect, useState} from 'react';
import Category from './Category'


export default function DBCategories () {

    const [categories, setCategories] = useState([]);

    useEffect(()=> {
        fetch ("https://freshmarket-grupo9.herokuapp.com/api/products/")
        .then (res => res.json())
        .then (data => {setCategories(data.meta.categorias)})
    },[]);

    console.log(categories)

    return (
        <>
        {
        categories.map ((category,i)=> <Category category={category.name} index={i} />
        )
        }    
        </>
    )
}

