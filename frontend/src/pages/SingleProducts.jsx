import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleProducts = () => {
    const item = useLoaderData()

    useEffect(()=> {
        window.scrollTo(0, 0)
    },[])

    const exactNumber = (timeString) => {
        if (!timeString) return 0
        return parseInt(timeString.split(' ')[0], 10)
    }

    let prepTimeMin = exactNumber(item?.more?.[0].prep_time)
    let cookTimeMin = exactNumber(item?.more?.[0].cook_time)

    const totalTime = prepTimeMin + cookTimeMin

  return (
    <section className='min-h-dvh md:flex justify-center items-center md:bg-eggshell'>
        <article>
            <div className='bg-white md:my-20 md:py-8 pb-8 md:rounded-xl'>
                <picture>
                    <img src={item.thumbnail_image} alt="" className='md:max-w-[90%] w-full md:h-[570px] md:rounded-xl md:mx-auto' />
                </picture>
                <div className='px-8'>
                    <h1 className='text-4xl mt-12 text-(--color-secondary)'>{item.name}</h1>

                    <article className='bg-rose-50 mt-6 p-5 rounded-xl'>
                        <h3 className='text-xl font-semibold ml-2'>Preparation time</h3>
                        <ul className='list-disc mt-3 ml-8 text-lg marker:text-rose-500'>
                            <li className='pl-3'>
                                <p>
                                    <span>Total: </span> <span>{totalTime} minutes</span>
                                </p>
                            </li>
                            <li className='pl-3 mt-3'>
                                <p>
                                    <span>Preparation: </span> <span>{item?.more?.[0].prep_time}</span>
                                </p>
                            </li>
                            <li className='pl-3 mt-3'>
                                <p>
                                    <span>Cooking: </span> <span>{item?.more?.[0].cook_time}</span>
                                </p>
                            </li>
                        </ul>
                    </article>
                    <article className='bg-rose-50 mt-6 p-5 rounded-xl'>
                        <div className='mt-5 '>
                        <h3 className='text-xl font-semibold ml-2'>Ingredients</h3>
                        <ul className='list-disc marker:text-rose-500 mt-4 ml-6 text(--color-secondary) marker:aling-middle'>
                            {
                                item?.ingredients.map((ingredient, index) => (
                                    <li key={index} className='pl-4 mt-2'>
                                        <span> {ingredient?.name}: </span> <span> {ingredient?.quantity}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    </article>
                    <article className='bg-rose-50 mt-6 p-5 rounded-xl'>
                        <div className='mt-8'>
                            <h3 className='text-xl font-semibold ml-2'>Instructions</h3>
                            <ol className='marker:text-rose-500 marker:font-semibold marker:font-outfit list-decimal mt-4 ml-6'>
                                {item?.instructions
                                    ?.split(/\d+\.\s/)
                                    .filter(step => step.trim() !== "")
                                    .map((step, index) => (
                                    <li key={index} className="pl-4 mb-2">
                                        {step}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </article>
                </div>
            </div>
        </article>
    </section>
  )
}

export default SingleProducts