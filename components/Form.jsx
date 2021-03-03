import styles from '../styles/Form.module.scss';

const Form = () => (
  <form className={styles.form}>
    <h2>Register with us</h2>
    <div className="form-control">
      <fieldset>
        {/* Username */}
        <input type="text" id="username" placeholder="User Name" />
        <small className={styles.errorMessage}>Error message</small>
      </fieldset>
      {/* Email */}
      <fieldset>
        <input type="email" id="email" placeholder="Email" />
        <small className={styles.errorMessage}>Error message</small>
      </fieldset>

      {/* Password */}
      <fieldset>
        <input type="password" id="password" placeholder="Password" />
        <small className={styles.errorMessage}>Error message</small>
      </fieldset>

      {/* Confirm Password */}
      <fieldset>
        <input type="password" id="password2" placeholder="Confirm Password" />
        <small className={styles.errorMessage}>Error message</small>
      </fieldset>

      {/* Submit Button */}
      <button type="submit">Submit</button>
    </div>
  </form>
);

export default Form;
