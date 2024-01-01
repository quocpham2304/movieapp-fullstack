import { Alert, Button, Checkbox, Flex, Form, Input } from "antd";
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

  const [isLoginRequest, setIsLoginRequest] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

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
    // <Box component="form" onSubmit={signinForm.handleSubmit}>
    //   <Stack spacing={3}>
    //     <TextField
    //       type="text"
    //       placeholder="username"
    //       name="username"
    //       fullWidth
    //       value={signinForm.values.username}
    //       onChange={signinForm.handleChange}
    //       color="success"
    //       error={signinForm.touched.username && signinForm.errors.username !== undefined}
    //       helperText={signinForm.touched.username && signinForm.errors.username}
    //     />
    //     <TextField
    //       type="password"
    //       placeholder="password"
    //       name="password"
    //       fullWidth
    //       value={signinForm.values.password}
    //       onChange={signinForm.handleChange}
    //       color="success"
    //       error={signinForm.touched.password && signinForm.errors.password !== undefined}
    //       helperText={signinForm.touched.password && signinForm.errors.password}
    //     />
    //   </Stack>
    //   <Button
    //     fullWidth
    //     sx={{ marginTop: 1 }}
    //     onClick={() => switchAuthState()}
    //   >
    //     sign up
    //   </Button>

    //   {errorMessage && (
    //     <Box sx={{ marginTop: 2 }}>
    //       <Alert severity="error" variant="outlined" >{errorMessage}</Alert>
    //     </Box>
    //   )}
    // </Box>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
        color:'white'
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Tên đăng nhập"
        name="Tên đăng nhập"
        placeholder="Tên đăng nhập"
        value={signinForm.values.username}
        onChange={signinForm.handleChange}
        rules={[
          {
            required: true,
            message: 'vui lòng điền tên đăng nhập',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'vui lòng điền mật khẩu',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={() => switchAuthState()}>
          Submit
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