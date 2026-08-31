import { UserContext } from '@/09-useContext/context/UserContextProvider';
import { Button } from '@/components/ui/button';
import { use } from 'react';

export const ProfilePage = () => {

  const { user, logout } = use(UserContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-4xl'>Perfil del usuario</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 2)}</pre>

      <Button variant="destructive" onClick={handleLogout}>Salir</Button>
    </div>
  )
}
