'use client';

import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

export default function ProfilePage() {
	const router = useRouter();
	const { user, logout } = useAuth();
	const [name, setName] = useState('');
	const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

	useEffect(() => {
		if (!user) {
			router.push('/');
			return;
		}
		setName(user.name || '');
	}, [user, router]);

	const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Mock update functionality
		console.log('Update user:', { ...user, name });
	};

	const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const handleDelete = async () => {
		// Mock delete functionality
		logout();
		router.push('/');
	};

	if (!user) return null;

	return (
		<div className="container mx-auto px-4 pt-20 sm:pt-8">
			<div className="max-w-md mx-auto bg-base-100 shadow-xl rounded-lg">
				<div className="p-6">
					<h1 className="text-2xl font-bold mb-6">User Profile</h1>

					<form onSubmit={handleUpdate} className="space-y-4">
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
								value={user.email}
								disabled
							/>
						</div>

						{/* Action Buttons */}
						<div className="space-y-4 pt-4">
							<div className="flex justify-end">
								<button
									type="submit"
									className="btn btn-primary w-full sm:w-auto"
								>
									Update Profile
								</button>
							</div>
							<div className="flex flex-col sm:flex-row justify-between gap-2">
								<button
									type="button"
									className="btn btn-error btn-outline w-full sm:w-auto"
									onClick={() => setShowDeleteConfirm(true)}
								>
									Delete Account
								</button>
								<button
									type="button"
									className="btn btn-ghost w-full sm:w-auto"
									onClick={() => {
										logout();
										router.push('/');
									}}
								>
									Logout
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>

			{/* Delete Confirmation Modal */}
			{showDeleteConfirm && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
					<div className="card w-full max-w-sm bg-base-100 shadow-xl">
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
		</div>
	);
}