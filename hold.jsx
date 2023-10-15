function MultipleInputs() {
  const refs = useRef({
    username: null,
    password: null,
  });

  const handleSubmit = () => {
    const username = refs.current.username.value;
    const password = refs.current.password.value;
    // Do something with the values
  };

  return (
    <div>
      <input
        ref={(el) => (refs.current.username = el)}
        placeholder="Username"
      />
      <input
        ref={(el) => (refs.current.password = el)}
        type="password"
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}
