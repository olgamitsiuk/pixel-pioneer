'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
	id: number;
	email: string;
	password: string;
	name: string;
}

interface AuthContextType {
	user: User | null;
	token: string | null;
	login: (email: string, password: string) => boolean;
	register: (name: string, email: string, password: string) => boolean;
	logout: () => void;
}

const mockUsers: User[] = [
	{
		id: 1,
		email: 'test@example.com',
		password: '123',
		name: 'Test User'
	}
];

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [token, setToken] = useState<string | null>(null);

	// Move localStorage access to useEffect
	useEffect(() => {
		const storedToken = localStorage.getItem('token');
		if (storedToken) {
			setToken(storedToken);
		}
	}, []);

	const login = (email: string, password: string) => {
		const foundUser = mockUsers.find(u => u.email === email && u.password === password);
		if (foundUser) {
			const mockToken = `mock-token-${Date.now()}`;
			setUser(foundUser);
			setToken(mockToken);
			localStorage.setItem('token', mockToken);
			return true;
		}
		return false;
	};

	const register = (name: string, email: string, password: string) => {
		if (mockUsers.some(u => u.email === email)) {
			return false;
		}
		const newUser = { id: mockUsers.length + 1, email, password, name };
		mockUsers.push(newUser);
		const mockToken = `mock-token-${Date.now()}`;
		setUser(newUser);
		setToken(mockToken);
		localStorage.setItem('token', mockToken);
		return true;
	};

	const logout = () => {
		setUser(null);
		setToken(null);
		localStorage.removeItem('token');
	};

	return (
		<AuthContext.Provider value={{ user, token, login, register, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};