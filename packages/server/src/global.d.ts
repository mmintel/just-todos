declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_SECRET: string;
      POSTGRES_PORT: string;
      POSTGRES_HOST: string;
      POSTGRES_USERNAME: string;
      POSTGRES_PASSWORD: string;
      POSTGRES_DATABASE: string;
    }
  }
}

export {};
