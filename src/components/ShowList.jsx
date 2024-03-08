import React from 'react'
import style from './ShowList.module.css'
import { useState, useEffect } from 'react'
import Row from './Row'

const ShowList = () => {

    let [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data)
            console.log(data)
        })
    },[])

    return (
        <div className={style.container} >


            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                
                            </th>
                            <th scope="col" class="px-6 py-3">
                                
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => {
                                return(
                                    <Row 
                                    name={product.name}
                                    price={product.price}
                                    />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ShowList