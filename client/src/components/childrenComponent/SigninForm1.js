// import { Alert, Button, Checkbox, Form, Input } from "antd";
// import { useFormik } from "formik";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import * as Yup from "yup";
// import userApi from "../../api/modules/userapi.js";
// import { setAuthModalOpen } from "../../redux/features/authModalSlice.js";
// import { setUser } from "../../redux/features/userSlice.js";

// const SigninForm = ({ switchAuthState }) => {
//   const dispatch = useDispatch();

//   const [isLoginRequest, setIsLoginRequest] = useState(false);
//   const [errorMessage, setErrorMessage] = useState();

//   const signinForm = useFormik({
//     initialValues: {
//       password: "",
//       username: ""
//     },
//     validationSchema: Yup.object({
//       username: Yup.string()
//         .min(8, "username minimum 8 characters")
//         .required("username is required"),
//       password: Yup.string()
//         .min(8, "password minimum 8 characters")
//         .required("password is required")
//     }),
//     onSubmit: async values => {
//       setErrorMessage(undefined);
//       setIsLoginRequest(true);
//       console.log("asdasdasdasd");
//       const { response, err } = await userApi.signin(values);
//       setIsLoginRequest(false);

//       if (response) {
//         signinForm.resetForm();
//         dispatch(setUser(response));
//         dispatch(setAuthModalOpen(false));
//         toast.success("Sign in success");
//       }

//       if (err) setErrorMessage(err.message);
//     }
//   });

//   return (
//     <Form
//       name="basic"
//       onFinish={signinForm.handleSubmit}
//       autoComplete="off"
//     >
//       <Form.Item
//         label="tên đăng nhập"
//         name="username"
//         placeholder="tên đăng nhập"
//         validateStatus={signinForm.touched.username && signinForm.errors.username !== undefined ? 'error' : 'success'}
//         help={signinForm.touched.username && signinForm.errors.username}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="mật khẩu"
//         name="password"
//         placeholder="mật khẩu"
//         validateStatus={signinForm.touched.password && signinForm.errors.password !== undefined ? 'error' : 'success'}
//         help={signinForm.touched.password && signinForm.errors.password}
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item>
//         <Button type="primary" htmlType="submit" loading={isLoginRequest}>
//           Đăng nhập
//         </Button>
//         <Button type="default" style={{ marginLeft: 8 }} onClick={() => switchAuthState()}>
//           Đăng ký
//         </Button>
//       </Form.Item>
//       {errorMessage && (
//         <div sx={{ marginTop: 2 }}>
//           <Alert severity="error" variant="outlined" >{errorMessage}</Alert>
//         </div>
//       )}
//     </Form>
//   );
// };

// export default SigninForm;

import { Form, Input, Button, Alert } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import userApi from "../../api/modules/userapi.js";
import { setAuthModalOpen } from "../../redux/features/authModalSlice.js";
import { setUser } from "../../redux/features/userSlice.js";
import { useFormik } from "formik";

const SigninForm = ({ switchAuthState }) => {
 const dispatch = useDispatch();

 const [isLoginRequest, setIsLoginRequest] = useState(false);
 const [errorMessage, setErrorMessage] = useState();

 const signinForm = useFormik({
    initialValues: {
      password: "",
      username: ""
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(8, "username minimum 8 characters")
        .required("username is required"),
      password: Yup.string()
        .min(8, "password minimum 8 characters")
        .required("password is required")
    }),
    onSubmit: async values => {
      setErrorMessage(undefined);
      setIsLoginRequest(true);
      console.log("asdasdasdasd");
      const { response, err } = await userApi.signin(values);
      setIsLoginRequest(false);

      if (response) {
        signinForm.resetForm();
        dispatch(setUser(response));
        dispatch(setAuthModalOpen(false));
        toast.success("Sign in success");
      }

      if (err) setErrorMessage(err.message);
    }
 });

 return (
    <Form onFinish={signinForm.handleSubmit}>
      <div>
        <Form.Item
          name="username"
          label="username"
          rules={[{ required: true, message: "username is required" }]}
          validateStatus={signinForm.touched.username && signinForm.errors.username ? "error" : ""}
          help={signinForm.touched.username && signinForm.errors.username}
        >
          <Input placeholder="username" />
        </Form.Item>

        <Form.Item
          name="password"
          label="password"
          rules={[{ required: true, message: "password is required" }]}
          validateStatus={signinForm.touched.password && signinForm.errors.password ? "error" : ""}
          help={signinForm.touched.password && signinForm.errors.password}
        >
          <Input.Password placeholder="password" />
        </Form.Item>
      </div>

      <Button type="primary" htmlType="submit" loading={isLoginRequest}>
        sign in
      </Button>

      <Button style={{ marginTop: 10 }} onClick={() => switchAuthState()}>
        sign up
      </Button>

      {errorMessage && (
        <div sx={{ marginTop: 2 }}>
          <Alert message={errorMessage} type="error" />
        </div>
      )}
    </Form>
 );
};

export default SigninForm;