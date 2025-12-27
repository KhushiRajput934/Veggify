import React from 'react'
import {Link} from 'react-router-dom'

function CategoryItem ({name, href, backgroundColor, color}) {
    const style = {
        backgroundColor: backgroundColor,
        color: color,
        borderColor: color
    }
    return (
        <div>
            <Link to={href} className='rounded-full' >
                <div className='uppercase px-6 py-2 text-center rounded-full' style={style} >{name}</div>
            </Link>
        </div>
    )
}

function CategoryList() {
    return (
        <div className='flex flex-wrap items-center justify-center gap-8'>
            <CategoryItem name='entrees' href='/categories/entrees' backgroundColor='#fee2e2' color='#000' />
            <CategoryItem name='breakfast' href='/categories/breakfast' backgroundColor='#fee2e2' color='#000' />
            <CategoryItem name='lunch' href='/categories/lunch' backgroundColor='#fee2e2' color='#000' />
            <CategoryItem name='desserts' href='/categories/desserts' backgroundColor='#fee2e2' color='#000' />
            <CategoryItem name='sides' href='/categories/sides' backgroundColor='#fee2e2' color='#000' />
            <CategoryItem name='drinks' href='/categories/drinks' backgroundColor='#fee2e2' color='#000' />
        </div>
    )
}

const CategoryWrapper = () => {
  return (
    <div>
        <CategoryList />
    </div>
  )
}

export default CategoryWrapper