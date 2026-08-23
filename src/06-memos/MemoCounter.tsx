import { useMemo } from 'react'
import { useCounter } from '@/hooks/useCounter'

const heavyStuff = (iterationNumber: number) => {
  console.time('Heavy_stuff_started');

  for (let i = 0; i < iterationNumber; i++) {
    console.log('ahí vamos...');
  }

  console.timeEnd('Heavy_stuff_started');

  return `${iterationNumber} iteraciones realizadas`;
}

export const MemoCounter = () => {

  const {counter, increment} = useCounter(20000)
  // los dos puntos son un alias
  const {counter:counter2, increment:increment2} = useCounter(10)

  const myHeavyValue = useMemo( () => heavyStuff(counter), [counter]);

  return (
    <div className='bg-gradient flex flex-col gap-4'>
      <h1 className='text-2xl font-thin text-white'>Memo - useMemo</h1>

      <h4>
        Counter: {counter}
      </h4>

      <h4>
        Counter2: {counter2}
      </h4>


      <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer' onClick={increment}>+1</button>

      <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer' onClick={increment2}>Counter2 +1</button>

    </div>
  )
}
