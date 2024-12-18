'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginModal from '../auth/LoginModal';
import RegisterModal from '../auth/RegisterModal';
import { useAuth } from '../../context/AuthContext';

const userIconConfig = {
	loggedOut: {
		viewBox: "0 0 24 24",
		paths: [
			{ d: "M12 8a4 4 0 100-8 4 4 0 000 8z", fill: "none", stroke: "currentColor", strokeWidth: "2" },
			{ d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2", fill: "none", stroke: "currentColor", strokeWidth: "2" }
		]
	},
	loggedIn: {
		viewBox: "0 0 24 24",
		paths: [
			{ d: "M12 8a4 4 0 100-8 4 4 0 000 8z", fill: "currentColor", stroke: "currentColor", strokeWidth: "2" },
			{ d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2", fill: "none", stroke: "currentColor", strokeWidth: "2" }
		]
	}
};

const UserIcon = () => {
	const router = useRouter();
	const { user } = useAuth();
	const [showLogin, setShowLogin] = useState(false);
	const [showRegister, setShowRegister] = useState(false);

	const handleUserClick = () => {
		if (user) {
			router.push('/profile');
		} else {
			setShowLogin(true);
		}
	};

	const config = user ? userIconConfig.loggedIn : userIconConfig.loggedOut;

	return (
		<div>
			<button
				className="btn btn-ghost btn-circle btn-sm sm:btn-md"
				onClick={handleUserClick}
				aria-label={user ? 'User profile' : 'Login'}
			>
				<svg
					className="w-4 h-4 sm:w-5 sm:h-5"
					viewBox={config.viewBox}
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
				>
					{config.paths.map((path, index) => (
						<path
							key={index}
							d={path.d}
							fill={path.fill}
							stroke={path.stroke}
							strokeWidth={path.strokeWidth}
						/>
					))}
				</svg>
			</button>

			{/* Auth Modals */}
			<LoginModal
				isOpen={showLogin}
				onClose={() => setShowLogin(false)}
				onRegister={() => {
					setShowLogin(false);
					setShowRegister(true);
				}}
			/>
			<RegisterModal
				isOpen={showRegister}
				onClose={() => setShowRegister(false)}
				onLogin={() => {
					setShowRegister(false);
					setShowLogin(true);
				}}
			/>
		</div>
	);
};

export default UserIcon;