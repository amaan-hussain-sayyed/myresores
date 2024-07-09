


import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    if (!isAuthenticated) {
      return <button className="btn btn-primary 
            mx-5 my-5 px-4"
        onClick={() => loginWithRedirect()}>
        Log In</button>;
    }
  };


  const Profile = () => {
    const { user } = useAuth0();

    return (
      <>
        <div className="container">
          <p className="userInfo" id="userInfo1">
            Name: {user.name}</p>
          <p className="userInfo" id="userInfo2">
            Given Name: {user.given_name}</p>
          <p className="userInfo" id="userInfo3">
            Family Name: {user.family_name}</p>
          <p className="userInfo" id="userInfo4">
            Email: {user.email}</p>
          <p className="userInfo" id="userInfo5">
            Sub: {user.sub}</p>
        </div>
      </>
    )
  }

  const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    if (isAuthenticated) {
      return (
        <>
          <button className="btn btn-primary 
                    mx-5 my-5 px-4 logoutBtn"
            onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
          </button>
          <br />
          <Profile />
        </>
      );
    }
  };

  return (
    <>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <span className="appName">
            React User Authentication</span>
        </div>
      </nav>
      <LoginButton />
      <LogoutButton />
    </>
  );
}

export default App