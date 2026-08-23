import { useCallback, useState } from 'react'
import { MyTitle } from './ui/MyTitle'
import { MySubTitle } from './ui/MySubTitle'

export const MemoHook = () => {

  const [title, setTitle] = useState('Hola');
  const [subtitle, setSubTitle] = useState('Mundo');

  const handleMyApiCall = useCallback(() => {
    console.log('Llamar a mi API', subtitle);
  }, [subtitle]);

  return (
    <div className='bg-gradient flex flex-col gap-4'>
      <h1 className='text-2xl font-thin text-white'>Memo App</h1>

      <MyTitle title={title} />

      <MySubTitle subtitle={subtitle} callMyApi={handleMyApiCall}/>

      <h6>Mi subtitulo</h6>

      <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
        onClick={ () => setTitle('Hello') }
      >
        Cambiar título
      </button>

      <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
        onClick={ () => setSubTitle('World')}
      >
        Cambiar subtitulo
      </button>
    </div>
  )
}
