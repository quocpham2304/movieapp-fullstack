import { Button, Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setAuthModalOpen } from '../../redux/features/authModalSlice.js';
import Logo from './Logo';
import SignupForm from './SignupForm.js';
import SigninForm from './SigninForm1.js';



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
        <div >
            <Modal open={authModalOpen} onCancel={handleClose} style={{backgroundColor:"black"}}>
                <Logo/>
                {action === actionState.signin && <SigninForm switchAuthState={() => switchAuthState(actionState.signup)} />}

                {action === actionState.signup && <SignupForm switchAuthState={() => switchAuthState(actionState.signin)} />}
                
            </Modal>
        </div>
    )
}

export default AuthModal