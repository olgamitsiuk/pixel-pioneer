declare namespace NodeJS {
	interface ProcessEnv {
		NEXT_PUBLIC_MEDIA_URL: string;
		NODE_ENV: 'development' | 'production' | 'test';
	}
}