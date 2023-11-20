import { createContext, useReducer, ReactNode } from 'react';

type LoginInputs = {
  username: string;
  password: string;
};

type AuthState = {
  isAuthenticated: boolean;
  user: LoginInputs | null;
};

type AuthAction =
  | { type: 'LOGIN'; payload: LoginInputs }
  | { type: 'LOGOUT' };


  let initialState: AuthState = {
    isAuthenticated: false,
    user: null,
  };
  
const isAuthenticatedFromStorage = localStorage.getItem('isAuthenticated') === 'true';
if (isAuthenticatedFromStorage) {
  initialState = { isAuthenticated: true, user: null };
}

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('isAuthenticated', 'true');
      return( {isAuthenticated: true, user: action.payload})
    case 'LOGOUT':
      localStorage.setItem('isAuthenticated', 'false');
      return initialState;
    default:
      return state;
  }
};

export const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
