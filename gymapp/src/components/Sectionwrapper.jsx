import React from 'react'

const Sectionwrapper = (props) => {
    const {children , header, title,id}= props // this is called destructuring 
  return (
   
    <section id={id} className='min-h-screen flex flex-col gap-10'> 
        {/* props are present from paren to child component */}
        <h1>hello2</h1>
        <div className='bg-slate-950 py-10 flex flex-col p-4 gap-2 justify-center items-center'>
            <p className='uppercase font-medium'>
                {header}
            </p>
            <h2 className='font-semibold tetx-3xl sm:text-4xl md;text-5xl lg:text-6xl'>
                {title[0]} <span className='uppercase text-blue-400'>{title[1]}</span> {title[2]}
            </h2>
        </div>
        <div className='max-w-[800pc] w-full flex flex-col mx-auto gap-10 p-4'>
             {children}
        </div>
    


    </section>

  )
}

export default Sectionwrapper