import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

export default function RegisterAndLoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginOrRegister, setIsLoginOrRegister] = useState('register');
  const { setUsername: setLoggedInUsername, setId } = useContext(UserContext);
  const [error, setError] = useState(null);

  async function handleSubmit(ev) {
    ev.preventDefault();
    const url = isLoginOrRegister === 'register' ? 'register' : 'login';
    try {
      console.log("Submitting form"); // Debug statement
      const { data } = await axios.post(url, { username, password });
      setLoggedInUsername(username);
      setId(data.id);
      setError(null); // Clear any previous errors
    } catch (err) {
      console.error('An error occurred:', err);
      setError('Failed to ' + (isLoginOrRegister === 'register' ? 'register' : 'login') + '. Please try again. Note: While registering donot use already used username.');
    }
  }

  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto mb-14" onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={ev => setUsername(ev.target.value)}
          type="text"
          placeholder="username"
          className="block w-full rounded-sm p-2 mb-2 border"
        />
        <input
          value={password}
          onChange={ev => setPassword(ev.target.value)}
          type="password"
          placeholder="password"
          className="block w-full rounded-sm p-2 mb-2 border"
        />
        <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
          {isLoginOrRegister === 'register' ? 'Register' : 'Login'}
        </button>
        {error && <div className="text-red-500 text-center mt-2">{error}</div>}
        <div className="text-center mt-2">
          {isLoginOrRegister === 'register' && (
            <>
            <div>
              Already a member?
              <button type="button" color ="blue" onClick={() => setIsLoginOrRegister('login')}>Login here</button>
            </div>
             <div></div>
            <div>
               <strong>Demo Account</strong> <br/>
                username: avhi<br/>
                password: avhi
            </div>
            </>
          )}
          {isLoginOrRegister === 'login' && (<>
            <div>
              Don't have an account?
              <button type="button" color="blue" onClick={() => setIsLoginOrRegister('register')}>Register</button>
            </div>
            <div></div>
            <div>
               <strong>Demo Account</strong> <br/>
                username: avhi<br/>
                password: avhi
            </div>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
