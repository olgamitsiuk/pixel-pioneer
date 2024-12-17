import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useAuth } from '../../context/AuthContext';

interface LoginModalProps {
	isOpen: boolean;
	onClose: () => void;
	onRegister?: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onRegister }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const { login } = useAuth();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const success = login(email, password);
		if (success) {
			setEmail('');
			setPassword('');
			setError('');
			onClose();
		} else {
			setError('Invalid credentials');
		}
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
			<div className="card w-96 bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="card-title text-xl font-bold">Login</h2>

					<form onSubmit={handleSubmit}>
						<div className="form-control w-full gap-4">
							{/* Error Alert */}
							{error && (
								<div className="alert alert-error">
									<span>{error}</span>
								</div>
							)}

							{/* Email Input */}
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
									className="input input-bordered w-full"
									value={email}
									onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
									required
								/>
							</div>

							{/* Password Input */}
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="password"
									className="input input-bordered w-full"
									value={password}
									onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
									required
								/>
							</div>

							{/* Action Buttons */}
							<div className="card-actions justify-between mt-6">
								<div className="space-x-2">
									<button
										type="button"
										className="btn btn-ghost"
										onClick={onClose}
									>
										Cancel
									</button>
									{onRegister && (
										<button
											type="button"
											className="btn btn-ghost"
											onClick={onRegister}
										>
											Register
										</button>
									)}
								</div>
								<button
									type="submit"
									className="btn btn-primary"
								>
									Login
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginModal;