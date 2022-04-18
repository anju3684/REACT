import React, { useRef } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import user from "../../assests/user-management.png";
import "./Signup.css";
import { login } from "../../store/signUpform";

export const Signup = () => {
  const fileRef = useRef();

  const dispatch = useDispatch();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  // const fileRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      profilePic: null,
      name: "",
      phoneNo: "",
      email: "",
      password: "",
      confPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Name is Required"),
      profilePic: Yup.mixed()
        .nullable()
        .required("Profile picture is required")
        .test("fileSize", "image size is too much big", (value) => {
          return !value || (value !== null && value.size <= 2000000);
        })
        .test("fileType", "image type should be jpg or png only ", (value) => {
          return (
            !value ||
            (value !== null && ["image/jpg", "image/png"].includes(value.type))
          );
        }),
      phoneNo: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("PhoneNo is Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
      password: Yup.string().required("No password provided"),
      confPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("No password provided"),
    }),
    // onSubmit: (values) => {
    //   console.log(URL.createObjectURL(values.profilePic));
    //   alert(JSON.stringify(values, null, 2));
    // },
    onSubmit: (values) => {
      console.log(URL.createObjectURL(values.profilePic));
      dispatch(
        login({
          profile: URL.createObjectURL(values.profilePic),
          Name: values.name,
          email: values.email,
          number: values.phoneNo,
        })
      );
    },
  });

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-5">
            <div>
              <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
              <form onSubmit={formik.handleSubmit}>
                <div className="img">
                  <input
                    hidden
                    id="file"
                    type="file"
                    name="profilePic"
                    ttitle="&nbsp;"
                    accept=".jpg, .png"
                    ref={fileRef}
                    onChange={(event) => {
                      formik.setFieldValue(
                        "profilePic",
                        event.currentTarget.files[0]
                      );
                    }}
                    onBlur={formik.handleBlur}
                  />
                  <label htmlFor="file" name="profilePic">photo+</label>

                  {formik.touched.profilePic && formik.errors.profilePic ? (
                    <div className="error">{formik.errors.profilePic}</div>
                  ) : null}
                </div>
                <div className="mb-2">
                  <label htmlFor="name">Full Name</label>
                  {/* <img src={formik.values.profilePic} /> */}

                  <input
                    className="form-control shadow-none"
                    id="name"
                    type="text"
                    {...formik.getFieldProps("name")}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="error">{formik.errors.name}</div>
                  ) : null}
                </div>
                <div className="mb-2">
                  <label htmlFor="email"> Email</label>
                  <input
                    className="form-control shadow-none"
                    id="email"
                    type="email"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="mb-2">
                  <label htmlFor="lastName">PhoneNo</label>
                  <input
                    className="form-control shadow-none"
                    id="phoneNo"
                    type="text"
                    {...formik.getFieldProps("phoneNo")}
                  />
                  {formik.touched.phoneNo && formik.errors.phoneNo ? (
                    <div className="error">{formik.errors.phoneNo}</div>
                  ) : null}
                </div>
                <div className="mb-2">
                  <label htmlFor="name">password</label>
                  <input
                    className="form-control shadow-none"
                    id="password"
                    type="password"
                    autoComplete="off"
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="error">{formik.errors.phoneNo}</div>
                  ) : null}
                </div>
                <div className="mb-2">
                  <label htmlFor="confPassword">Confirm Password</label>
                  <input
                    className="form-control shadow-none"
                    id="confPassword"
                    type="password"
                    {...formik.getFieldProps("confPassword")}
                  />
                  {formik.touched.confPassword && formik.errors.confPassword ? (
                    <div className="error">{formik.errors.confPassword}</div>
                  ) : null}
                </div>

                <button className="btn btn-primary mt-3" type="submit">
                  Submit
                </button>
                <button className="btn btn-danger mt-3 ml-3" type="reset">
                  Reset
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-7 my-auto">
            <img className="img-fluid w-100" src={user} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
