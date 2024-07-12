import React, { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import generateWorkout from './utils/functions'
const App = () => {
  const[workout, setWorkout] = useState(null)
  const[poison, setPoison]=useState('individual')
  const[muscles, setMuscles]=useState([])
  const[goal, setGoal]=useState('strength_power') //if u set this to empty wo blue highlight hoke nahi aayega

  function updateworkout () {
    if(muscles.length==0 )
      {
        return 
      }
    let newworkout = generateWorkout({poison, muscles, goal})
    
    setWorkout(newworkout)
    window.location.href ='#workout'
    
  }
  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base '>
      <Hero />
      <Generator 
      poison={poison} 
      setPoison={setPoison}
      muscles={muscles}
      setMuscles={setMuscles}
      goal={goal}
      setGoal={setGoal}
      updateworkout={updateworkout}/>
      {workout && (<Workout workout ={workout}/>)}

    </main>
  )
}

export default App
