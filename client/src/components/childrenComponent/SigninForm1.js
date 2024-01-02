// import { Alert, Button, Checkbox, Flex, Form, Input } from "antd";
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

//   const onFinish = (values) => {
//     console.log('Success:', values);
//   };
//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

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
//       labelCol={{
//         span: 8,
//       }}
//       wrapperCol={{
//         span: 16,
//       }}
//       style={{
//         maxWidth: 600,
//         color: 'white'
//       }}
//       initialValues={{
//         remember: true,
//       }}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//       onSubmit={signinForm.handleSubmit}
//       autoComplete="off"
//     >
//       <Form.Item
//         label="Tên đăng nhập"
//         name="Tên đăng nhập"
//         placeholder="Tên đăng nhập"
//         value={signinForm.values.username}
//         onChange={signinForm.handleChange}
//         rules={[
//           {
//             required: true,
//             message: 'vui lòng điền tên đăng nhập',
//           },
//         ]}
//         validateStatus={signinForm.touched.username && signinForm.errors.username !== undefined ? 'error' : 'success'}
//         help={signinForm.touched.username && signinForm.errors.username}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Password"
//         name="password"
//         rules={[
//           {
//             required: true,
//             message: 'vui lòng điền mật khẩu',
//           },
//         ]}
//         validateStatus={signinForm.touched.password && signinForm.errors.password !== undefined ? 'error' : 'success'}
//         help={signinForm.touched.password && signinForm.errors.password}
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item
//         wrapperCol={{
//           offset: 8,
//           span: 16,
//         }}
//       >
//         <Button type="primary" htmlType="submit" onClick={() => switchAuthState()}>
//           Submit
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
//  const dispatch = useDispatch();

//  const [isLoginRequest, setIsLoginRequest] = useState(false);
//  const [errorMessage, setErrorMessage] = useState();

//  const signinForm = useFormik({
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
//  });

//  return (
//     <Form
//       name="basic"
//       onFinish={signinForm.handleSubmit}
//       autoComplete="off"
//     >
//       <Form.Item
//         label="username"
//         name="username"
//         placeholder="username"
//         validateStatus={signinForm.touched.username && signinForm.errors.username !== undefined ? 'error' : 'success'}
//         help={signinForm.touched.username && signinForm.errors.username}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="password"
//         name="password"
//         placeholder="password"
//         validateStatus={signinForm.touched.password && signinForm.errors.password !== undefined ? 'error' : 'success'}
//         help={signinForm.touched.password && signinForm.errors.password}
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item>
//         <Button type="primary" htmlType="submit">
//           sign in
//         </Button>
//         <Button type="default" style={{ marginLeft: 8 }} onClick={() => switchAuthState()}>
//           sign up
//         </Button>
//       </Form.Item>
//       {errorMessage && (
//         <div sx={{ marginTop: 2 }}>
//           <Alert severity="error" variant="outlined" >{errorMessage}</Alert>
//         </div>
//       )}
//     </Form>
//  );
// };

// export default SigninForm;

import { Alert, Button, Checkbox, Form, Input } from "antd";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import userApi from "../../api/modules/userapi.js";
import { setAuthModalOpen } from "../../redux/features/authModalSlice.js";
import { setUser } from "../../redux/features/userSlice.js";

const SigninForm = ({ switchAuthState }) => {
 const dispatch = useDispatch();

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
      const { response, err } = await userApi.signin(values);

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
    <Form
      name="basic"
      onFinish={signinForm.handleSubmit}
      autoComplete="off"
    >
      <Form.Item
        label="username"
        name="username"
        placeholder="username"
        validateStatus={signinForm.touched.username && signinForm.errors.username !== undefined ? 'error' : 'success'}
        help={signinForm.touched.username && signinForm.errors.username}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="password"
        name="password"
        placeholder="password"
        validateStatus={signinForm.touched.password && signinForm.errors.password !== undefined ? 'error' : 'success'}
        help={signinForm.touched.password && signinForm.errors.password}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          sign in
        </Button>
        <Button type="default" style={{ marginLeft: 8 }} onClick={() => switchAuthState()}>
          sign up
        </Button>
      </Form.Item>
      {errorMessage && (
        <div sx={{ marginTop: 2 }}>
          <Alert severity="error" variant="outlined" >{errorMessage}</Alert>
        </div>
      )}
    </Form>
 );
};

export default SigninForm;