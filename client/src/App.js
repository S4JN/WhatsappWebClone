import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from "./components/Messenger";
import AccountProvider from './context/AccountProvider';

function App() {
  const clientid="541865452093-520gmu3ksbbsjqq9jd0qbua51snb4qgj.apps.googleusercontent.com"
  return (
    <GoogleOAuthProvider
      clientId={clientid}
     >
     <AccountProvider>

      <Messenger />
     </AccountProvider>
    </ GoogleOAuthProvider >
  );
}

export default App;
