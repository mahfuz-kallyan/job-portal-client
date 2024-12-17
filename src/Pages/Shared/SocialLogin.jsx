import React, { useContext } from 'react';
import AuthContext from '../../Context/AuthContext/AuthContext';

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
            console.log(result.user);
            })
            .catch(err => {
            console.log(err.message);
            
        })
    }
    return (
		<div>
			<div className="divider">OR</div>
			<button
				onClick={handleSignInWithGoogle}
				className="btn btn-primary"
			>
				Google
			</button>
		</div>
	);
};

export default SocialLogin;