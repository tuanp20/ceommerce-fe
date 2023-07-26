import axiosInstance from '@/lib/axios';

interface LoginData {
  username: string;
  password: string;
}

interface LoginResponse {
  access_token: string; // The JWT token received upon successful login
}

export const login = async (credentials: LoginData): Promise<string> => {
  try {
    const response = await axiosInstance.post<LoginResponse>(
      `${process.env.URI_API}/auth/login`,
      credentials
    );
    const token = response.data.access_token;
    localStorage.setItem('jwt', token);
    // localStorage.setItem('user', JSON.stringify(response?.data?.user));
    console.log('token', token);
    return token;
  } catch (error) {
    throw new Error(
      'Login failed. Please check your credentials and try again.'
    );
  }
};
