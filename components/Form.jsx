const Form = () => (
  <form>
    <h2>Register with us</h2>
    <div className="form-control">
      {/* Username */}
      <label htmlFor="username" />
      <input type="text" id="username" placeholder="Enter username" />
      <small>Error message</small>

      {/* Email */}
      <label htmlFor="email" />
      <input type="email" id="email" placeholder="Enter email" />
      <small>Error message</small>

      {/* Password */}
      <label htmlFor="password" />
      <input type="password" id="password" placeholder="Enter password" />
      <small>Error message</small>

      {/* Confirm Password */}
      <label htmlFor="password2" />
      <input type="password" id="password2" placeholder="Confirm password" />
      <small>Error message</small>

      {/* Submit Button */}
      <button type="submit">Submit</button>
    </div>
  </form>
);

export default Form;
