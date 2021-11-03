const Login = () => {
  return (
    <>
      <section className='home login'>
        <div className='overlay'>
          <form className='form-control'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Your email address'
              required
            />
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Your password'
              required
            />
            <button type='submit'>Log In</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
