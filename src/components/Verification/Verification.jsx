import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../Verification/verification.css';

const VerificationConfirmation = () => {
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        navigate('/');
    };

    return (
        <div className="verification-page">
            <div className="verification-container">
                <h2 className='email-verification-heading'>Email Verified Successfully</h2>
                <p className='email-verification-paragraph'>Thank you for verifying your email. You can now log in to your account.</p>
                <Button type="primary" className='verification-btn' onClick={handleLoginRedirect}>
                    Go to Login
                </Button>
            </div>
        </div>
    );
};

export default VerificationConfirmation;
