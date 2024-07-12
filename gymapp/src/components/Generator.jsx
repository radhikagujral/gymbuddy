import React, { useState } from 'react'
import Sectionwrapper from './Sectionwrapper'
import { SCHEMES, WORKOUTS } from '../utils/swoldier'
import Button from './Button';
function Header(props) {
    const { index, title, description } = props;
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    );
}

const Generator = (props) => {
    {/* we're differentiating the ending n opening tag because we want to make chidren component here.
sectionwrapper was made cause generator and workout have similar layout
so that similar goes into sectionwrapper. */}
const {muscles,setMuscles, poison, setPoison, goal, setGoal, updateworkout}= props

const [showmodal, setShowmodal]= useState(false)



function togglemodal()
    {
        setShowmodal(!showmodal)
    }
function updatemuscles(muscleGroup)
{
    if(muscles.includes(muscleGroup))
        {
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return
        }
    if(muscles.length >2)
        {
            return 
        }
    if(poison !== 'individual')
        {
            setMuscles([muscleGroup])
            setShowmodal(false)
            return 
        }
    
    setMuscles([...muscles,muscleGroup])
    if(muscles.length ===2)
        {
            setShowmodal(false)
        }
}
    return (
        <Sectionwrapper id= {'generate'} header={"Generate your workout"} title={['It\'s', 'Huge', 'o\'clock']}>
            <Header index={'01'} title={'Pick your poison'} description={"Select your workout"} />
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                {Object.keys(WORKOUTS).map((type,typeIndex) =>
                {
                    return(
                        <button onClick ={() =>{
                            setMuscles([])
                            setPoison(type)
                        }}className={'bgs-late-950 px-4 border-2 border-blue-400 py-3 rounded-lg duration-200 hover:border-blue-600' + (type === poison ? ' border-blue-600' : ' border-blue-400')} key={typeIndex}>
                            <p className='capitalize'>{type.replaceAll('_'," ")}</p>
                        </button>
                    )
                })}
            </div>
            <Header index={'02'} title={'Lock on targets'} description={"Select the muscles judged for annihilation"} />
            <div className='bg-slate-950 border-2 border-solid border-blue-400 flex flex-col rounded-lg'>
                <button onClick={togglemodal} className='relative p-3 flex item-ceter justify-center'>
                    <p className='capitalize'>{muscles.length ==0 ? 'Select muscle groups' : muscles.join(' ')}</p>
                    <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
                </button>
                { showmodal && ( 
                    <div className='flex flex-col px-3 pb-3 '>
                        {(poison ==='individual' ? WORKOUTS[poison] :Object.keys(WORKOUTS[poison])).map((muscleGroup,muscleGroupIndex) =>{
                        return(
                            <button onClick={() => { updatemuscles(muscleGroup)}} key={muscleGroupIndex} className={'hover:text-blue-400 duration-200' + (muscles.includes(muscleGroup) ? ' text-blue-400' : ' ')}>
                                
                                <p className='capitalize'>{muscleGroup.replaceAll('_'," ")}</p>
                            </button>
                                
                        )
                        })}
                    </div>
                )}
            </div>
            <Header index={'03'} title={'Become Juggernaught'} description={"Select your ultimate objective"} />
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 '>
                {Object.keys(SCHEMES).map((scheme,schemeIndex) =>
                {
                    return(
                        <button onClick={()=>
                            {
                                setGoal(scheme)
                            }
                        } className={'bgs-late-950 px-4  border-2 border-blue-400 py-3 rounded-lg duration-200 hover:border-blue-600'+ (scheme === goal ? ' border-blue-600' : ' border-blue-400')} key={schemeIndex}>
                            <p className='capitalize'>{scheme.replaceAll('_'," ")}</p>
                        </button>
                    )
                })}
            </div >
            <Button func={updateworkout} text ={"Formulate"}/>
        </Sectionwrapper>
    );
}

export default Generator;
