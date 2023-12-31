import { Button, Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setAuthModalOpen } from '../../redux/features/authModalSlice.js';
import Logo from './Logo';
// import SigninForm from "./SigninForm";
// import SignupForm from "./SignupForm";


const actionState = {
    signin: "signin",
    signup: "signup"
  };

const AuthModal = () => {
    const { authModalOpen } = useSelector((state) => state.authModal);

    const dispatch = useDispatch();

    const [action, setAction] = useState(actionState.signin);

    useEffect(() => {
        if (authModalOpen) setAction(actionState.signin);
    }, [authModalOpen]);

    const handleClose = () => dispatch(setAuthModalOpen(false));

    const switchAuthState = (state) => setAction(state);

    return (
        <>
            <Modal title="Basic Modal" open={authModalOpen} onCancel={handleClose}>
                {/* {action === actionState.signin && <SigninForm switchAuthState={() => switchAuthState(actionState.signup)} />}

                {action === actionState.signup && <SignupForm switchAuthState={() => switchAuthState(actionState.signin)} />} */}
                <Logo/>
            </Modal>
        </>
    )
}

export default AuthModal