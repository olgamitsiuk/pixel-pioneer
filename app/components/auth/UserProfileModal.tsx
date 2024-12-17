import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useAuth } from '../../context/AuthContext';

interface UserProfileModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const UserProfileModal: React.FC<UserProfileModalProps> = ({ isOpen, onClose }) => {
	const { user, logout } = useAuth();
	const [name, setName] = useState(user?.name || '');
	const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

	const handleUpdate = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Mock update functionality
		console.log('Update user:', { ...user, name });
	};

	const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const handleDelete = () => {
		// Mock delete functionality
		logout();
		onClose();
	};

	if (!isOpen) return null;

	return (
		<>
			{/* Main Profile Modal */}
			<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
				<div className="card w-96 bg-base-100 shadow-xl">
					<div className="card-body">
						<h2 className="card-title text-xl font-bold">User Profile</h2>
						<form onSubmit={handleUpdate}>
							<div className="form-control w-full gap-4">
								{/* Name Input */}
								<div className="form-control">
									<label className="label">
										<span className="label-text">Full Name</span>
									</label>
									<input
										type="text"
										className="input input-bordered w-full"
										value={name}
										onChange={handleNameChange}
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
										value={user?.email}
										disabled
									/>
								</div>

								{/* Action Buttons */}
								<div className="flex flex-col gap-2 mt-4">
									<div className="flex justify-between">
										<button
											type="button"
											className="btn btn-outline"
											onClick={onClose}
										>
											Cancel
										</button>
										<button
											type="submit"
											className="btn btn-primary"
										>
											Update Profile
										</button>
									</div>
									<div className="flex justify-between">
										<button
											type="button"
											className="btn btn-error btn-outline"
											onClick={() => setShowDeleteConfirm(true)}
										>
											Delete Account
										</button>
										<button
											type="button"
											className="btn btn-ghost"
											onClick={logout}
										>
											Logout
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>

			{/* Delete Confirmation Modal */}
			{showDeleteConfirm && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
					<div className="card w-96 bg-base-100 shadow-xl">
						<div className="card-body">
							<h2 className="card-title text-xl font-bold">Confirm Delete Account</h2>
							<p>Are you sure you want to delete your account? This action cannot be undone.</p>
							<div className="card-actions justify-end mt-4">
								<button
									className="btn btn-outline"
									onClick={() => setShowDeleteConfirm(false)}
								>
									Cancel
								</button>
								<button
									className="btn btn-error"
									onClick={handleDelete}
								>
									Delete Account
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default UserProfileModal;