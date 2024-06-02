import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loginSuccesful, setLoginSuccesful] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setLoginSuccesful(true);
    } else {
      setLoginFailed(true);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {loginFailed && !loginSuccesful ? (
        <h3>Invalid username or password</h3>
      ) : (
        ""
      )}
      {loginSuccesful ? (
        <h3>Welcome, user!</h3>
      ) : (
        <form
          action="submit"
          className={styles.formStyles}
          onSubmit={handleSubmit}
        >
          <label htmlFor="Username">Username:</label>
          <input
            type="text"
            placeholder="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="Password:">Password:</label>
          <input
            type="text"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default App;
