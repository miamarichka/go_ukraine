import { useAuthStore } from './authStore';

export const selectIsLoggedIn = state => state.isLoggedIn;
export const selectUser = state => state.currentUser;
export const selectPicture = state => state.userImg;
export const selectIsHasAccount = state => state.isHasAccount;
export const selectIsRefreshing = state => state.isRefreshing;
export const selectIsLoading = state => state.isLoading;
export const selectIsError = state => state.isError;
export const selectIsToken = state => state.token;

export const useAuth = () => ({
  isLoggedIn: useAuthStore(selectIsLoggedIn),
  user: useAuthStore(selectUser),
  isHasAccount: useAuthStore(selectIsHasAccount),
  isRefreshing: useAuthStore(selectIsRefreshing),
  isLoading: useAuthStore(selectIsLoading),
  isError: useAuthStore(selectIsError),
  token: useAuthStore(selectIsToken),
});
