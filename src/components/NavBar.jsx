import React from 'react'
import style from './NavBar.module.css'
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className={style.container}>
            <Link to='/show' className={style.linka}>
                <button class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" className={style.btn}>
                    Exibir Lista
                </button>
            </Link >
            <Link  to='/edit' className={style.linkb}>
                <button class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" className={style.btn}>
                    Editar Lista
                </button>
            </Link>
        </div>
    )
}

export default NavBar