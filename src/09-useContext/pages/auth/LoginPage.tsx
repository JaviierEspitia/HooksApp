import { UserContext } from '@/09-useContext/context/UserContextProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'sonner';

export const LoginPage = () => {

  const { login } = useContext(UserContext);

  const [userId, setUserId] = useState('');

  const navigation = useNavigate();

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(userId);

    const result = login(+userId);

    if(!result){
      toast.error('Usuario no encontrado');
      return;
    }

    navigation('/profile');

  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1>Iniciar Sesión</h1>
      <hr />

      <form className='flex flex-col gap-2 my-10'
        onSubmit={ handleSubmit }
      >
        <Input type="number" placeholder='Id del usuario'
          value = {userId}
          onChange={(event) => setUserId(event.target.value)}
        />

        <Button type='submit'>
          Login
        </Button>
      </form>

      <Link to='/about'>
        <Button variant='ghost'>Volver a la pagina principal</Button>
      </Link>
    </div>
  )
}
