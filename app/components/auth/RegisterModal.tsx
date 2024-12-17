import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useAuth } from '../../context/AuthContext';

interface RegisterModalProps {
	isOpen: boolean;
	onClose: () => void;
	onLogin?: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose, onLogin }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const { register } = useAuth();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const success = register(name, email, password);
		if (success) {
			setName('');
			setEmail('');
			setPassword('');
			setError('');
			onClose();
		} else {
			setError('Email already exists');
		}
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
			<div className="card w-96 bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="card-title text-xl font-bold">Create Account</h2>

					<form onSubmit={handleSubmit}>
						<div className="form-control w-full gap-4">
							{/* Error Alert */}
							{error && (
								<div className="alert alert-error">
									<span>{error}</span>
								</div>
							)}

							{/* Name Input */}
							<div className="form-control">
								<label className="label">
									<span className="label-text">Full Name</span>
								</label>
								<input
									type="text"
									className="input input-bordered w-full"
									value={name}
									onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
									required
								/>
							</div>

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
									{onLogin && (
										<button
											type="button"
											className="btn btn-ghost"
											onClick={onLogin}
										>
											Login
										</button>
									)}
								</div>
								<button
									type="submit"
									className="btn btn-primary"
								>
									Register
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default RegisterModal;