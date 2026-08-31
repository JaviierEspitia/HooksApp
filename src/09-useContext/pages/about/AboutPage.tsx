import { UserContext } from '@/09-useContext/context/UserContextProvider';
import { Link } from 'react-router';
import { use } from 'react';
import { Button } from '@/components/ui/button';

export const AboutPage = () => {

  const { isAuthenticated, logout } = use(UserContext);




  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-4xl font-bold'>
        Pagina sobre mí
      </h1>
      <div className='flex flex-col gap-2'>
        {
          isAuthenticated && (
            <Link to="/profile" className='hover:text-blue-500 underline text-2xl'>Perfil</Link>
          )
        }
        
        {
          isAuthenticated ? (
            <Button variant="destructive" onClick={logout} className="mt-4">
              Salir
            </Button>
          ) : (
            <Link to="/login" className='hover:text-blue-500 underline text-2xl'>Iniciar sesión</Link>
          )
        }
        
      </div>
    </div>
  )
}
