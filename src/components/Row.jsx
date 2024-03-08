import React from 'react'

const Row = ({name, price}) => {
    
    return (
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {name}
            </th>
            <td class="px-6 py-4">

            </td>
            <td class="px-6 py-4">

            </td>
            <td class="px-6 py-4">
                R$ {price}
            </td>
            <td class="px-6 py-4 text-right">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
        </tr>
    )
}

export default Row