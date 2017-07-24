import React from 'react';
import './style.css';

const SigninLayout = ({ children }) => (
	<div className="container container-fill-height">
		<div className="container-content-middle">
			<div className="signin-container">
				{children}
			</div>
		</div>
	</div>
);

export default SigninLayout;
