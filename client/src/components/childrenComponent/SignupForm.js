import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import userApi from "../../api/modules/userapi.js";
import { setAuthModalOpen } from "../../redux/features/authModalSlice.js";
import { setUser } from "../../redux/features/userSlice.js";
import { Alert, Button, Form, Input } from "antd";

const SignupForm = ({ switchAuthState }) => {
  const dispatch = useDispatch();
  const [isLoginRequest, setIsLoginRequest] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const signinForm = useFormik({
    initialValues: {
      password: "",
      username: "",
      displayName: "",
      confirmPassword: ""
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(8, "tên đăng nhập tối thiểu 8 ký tự")
        .required("tên đăng nhập không được để trống"),
      password: Yup.string()
        .min(8, "mật khẩu tối thiểu 8 ký tự")
        .required("mật khẩu không được để trống"),
      displayName: Yup.string()
        .min(8, "tên hiển thị tối thiểu 8 ký tự")
        .required("tên hiển thị không được để trống"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "xác thực mật khẩu không khớp")
        .min(8, "xác thực mật khẩu tối thiểu 8 ký tự")
        .required("xác thực mật khẩu không được để trống")
    }),
    onSubmit: async values => {
      setErrorMessage(undefined);
      setIsLoginRequest(true);
      console.log("asdasdasdasd");
      const { response, err } = await userApi.signup(values);
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
    <Form
      onFinish={signinForm.handleSubmit}
      autoComplete="off"
    >
      <Form.Item
        label="tên đăng nhập"
        name="username"
        placeholder="tên đăng nhập"
        validateStatus={signinForm.touched.username && signinForm.errors.username !== undefined ? 'error' : 'success'}
        help={signinForm.touched.username && signinForm.errors.username}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="tên hiển thị"
        name="displayName"
        placeholder="tên hiển thị"
        validateStatus={signinForm.touched.displayName && signinForm.errors.displayName !== undefined ? 'error' : 'success'}
        help={signinForm.touched.displayName && signinForm.errors.displayName}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="mật khẩu"
        name="password"
        placeholder="mật khẩu"
        validateStatus={signinForm.touched.password && signinForm.errors.password !== undefined ? 'error' : 'success'}
        help={signinForm.touched.password && signinForm.errors.password}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="xác nhận mật khẩu"
        name="confirmPassword"
        placeholder="xác nhận mật khẩu"
        validateStatus={signinForm.touched.confirmPassword && signinForm.errors.confirmPassword !== undefined ? 'error' : 'success'}
        help={signinForm.touched.confirmPassword && signinForm.errors.confirmPassword}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit"  loading={isLoginRequest}>
          Đăng ký
        </Button>
        <Button type="default" style={{ marginLeft: 8 }} onClick={() => switchAuthState()}>
          Đăng nhập
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

export default SignupForm;