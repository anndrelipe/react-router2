import React from 'react'
import style from './EditList.module.css'

const EditList = () => {

    function onSubmitHandle(event) {
        event.preventDefault()
        const name = event.target.elements.name.value
        const price = event.target.elements.price.value

        fetch('http://localhost:3000/products', {
            method: 'POST',
            body: JSON.stringify({
                id: 5, 
                name: name, 
                price: price
            })
        })

    }

    return (
        <div className={style.container}>


            <form class="max-w-sm mx-auto"
            onSubmit={(e) => onSubmitHandle(e)}>
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome do Produto</label>
                    <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" className={style.input} placeholder="Nome Produto" required />
                </div>
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preço do Produto</label>
                    <input type="text" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" className={style.input} placeholder="Preço Produto" required />
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    )
}

export default EditList