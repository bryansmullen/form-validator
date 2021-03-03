import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../styles/Form.module.scss';

const Form = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      password2: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('Please Enter your password')
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
        ),
      password2: Yup.string()
        .label('Password Confirm')
        .required()
        .oneOf([Yup.ref('password')], 'Passwords does not match'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <h2>Register with us</h2>
      <div className="form-control">
        <fieldset>
          {/* Username */}
          <input
            type="text"
            id="username"
            name="username"
            placeholder="User Name"
            {...formik.getFieldProps('username')}
          />
          {formik.touched.username && formik.errors.username && (
            <small className={styles.errorMessage}>{formik.errors.username}</small>
          )}
        </fieldset>
        {/* Email */}
        <fieldset>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <small className={styles.errorMessage}>{formik.errors.email}</small>
          )}
        </fieldset>

        {/* Password */}
        <fieldset>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password && (
            <small className={styles.errorMessage}>{formik.errors.password}</small>
          )}
        </fieldset>

        {/* Confirm Password */}
        <fieldset>
          <input
            type="password"
            id="password2"
            name="password2"
            placeholder="Confirm Password"
            {...formik.getFieldProps('password2')}
          />
          {formik.touched.password2 && formik.errors.password2 && (
            <small className={styles.errorMessage}>{formik.errors.password2}</small>
          )}
        </fieldset>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
