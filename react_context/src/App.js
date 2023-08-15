import React, { useRef, useContext,useEffect } from "react";
import context from "./context";
import AfterLogin from "./AfterLogin";

const App = () => {
  const ctx = useContext(context);
  const submitHandler = (e) => {
    e.preventDefault();
    ctx.onLogin(emailRef.current.value, passRef.current.value);
  };

  const emailRef = useRef();
  const passRef = useRef();

  // useEffect(() => {
  //   if (ctx.isLoggedIn) {
  //     emailRef.current.value = "";
  //     passRef.current.value = "";
  //   }
  // }, [emailRef, passRef, ctx.isLoggedIn]);

  if (ctx.isLoggedIn) {
  return <AfterLogin/>
}

  return (
    <>
      <form onSubmit={submitHandler}>
        Email : <input type="email" ref={emailRef} /> <br />
        Password : <input type="password" ref={passRef} /> <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default App;
