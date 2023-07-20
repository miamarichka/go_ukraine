/** @format */

import axios from "axios";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const setAuthHeaders = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
};

const clearAuthHeader = () => axios.defaults.headers.common.Authorization = ''

const authStore = persist(
  (set, get) => ({
    currentUser: {
      name: null,
      email: null,
      password: null,
      avatar: null,
    },
    token: null,
    isLoggedIn: false,
    isHasAccount: false,
    isRefreshing: false,
    isLoading: false,
    isError: null,
    userReviews: [],
    registration: async (userData) => {
      try {
        set({ isLoading: true, isError: null });
        const response = await axios.post(
          "https://go-ukraine-users.onrender.com/api/v1/users/signup",
          userData
        );

        if (response.status === 201) {
          set({
            currentUser: userData,
            isLoggedIn: true,
            token: response.data.token
          });
          setAuthHeaders(response.data.token);
        }
      } catch (error) {
        set({
          currentUser: null,
          isLoggedIn: false,
          isError: error,
        });
      } finally {
        set({ isLoading: false });
      }
    },
    logIn: async (logInData) => {
      try {
        set({ isLoading: true, isError: null });
        const response = await axios.post(
          "https://go-ukraine-users.onrender.com/api/v1/users/login",
          logInData
        );
        if (response.status === 200) {
          set({
            currentUser: { ...response.data.user, ...logInData },
            isLoggedIn: true,
            token: response.data.token,
          });
          setAuthHeaders(response.data.token);
        } else {
          set({ isLoggedIn: false });
        }
      } catch (error) {
        set({
          currentUser: null,
          isLoggedIn: false,
          isError: error,
        });
      } finally {
        set({ isLoading: false });
      }
    },
    uploadPicture: async(file) => {
      try {
        set({ isLoading: true, isError: null });

        const response = await axios.patch(
          `https://go-ukraine-users.onrender.com/api/v1/users/avatar`,
          file,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        );

        if (response.status === 200) {
          set({ userImg: response.data.avatarURL });
        }
      } catch (error) {
        set({
          isError: error,
        });
      } finally {
        set({ isLoading: false });
      }
    },
    editData: async (newData) => {
      try {
        set({ isLoading: true, isError: null });

        const response = await axios.put(
          `https://go-ukraine-users.onrender.com/api/v1/users/edit`,
          newData
        );
        if (response.status === 200) {
          set({ currentUser: { ...get().currentUser, ...response.data, } });
        }
      } catch (error) {
        set({
          isError: error,
        });
      } finally {
        set({ isLoading: false });
      }
    },
    hasAccount: () => set({
      isHasAccount: true,
      isLoading: false,
      isError: false,
    }),
    hasntAccount: () => set({
      isHasAccount: false,
      isLoading: false,
      isError: false,
    }),
    refreshUser: async () => {
      const token = get().token;
      if (!token) return;
      setAuthHeaders(token);

      try {
        set({ isLoading: true, isError: null });
        const responce = await axios.get('https://go-ukraine-users.onrender.com/api/v1/users/current');
        if (responce.status === 200) {

          if (responce.data.avatarURL) {
            set({
              isLoggedIn: true,
              currentUser: {
                name: responce.data.name,
                email: responce.data.email,
                avatar: responce.data.avatarURL,
              },
            });
          } else {
            set({
              isLoggedIn: true,
              currentUser: {
                name: responce.data.name,
                email: responce.data.email,
              },
            });
          }
        }
      } catch (error) {
        set({
          isError: error,
        });
      } finally {
        set({ isLoading: false });
      }
    },
    logOut: async () => {
      try {
        set({ isLoading: true, isError: null });
        const responce = await axios.post('https://go-ukraine-users.onrender.com/api/v1/users/logout');
        if (responce.status === 200) {
          clearAuthHeader();
          set({
            currentUser: null,
            token: null,
            isLoggedIn: false,
          })
        }
      } catch (error) {
        set({
          isError: error,
        });
      } finally {
        set({ isLoading: false });
      }
    },
    postReview: async (reviewToPost) => {},
  }),
  {
    name: "authStore",
    getStorage: () => localStorage,
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => ({
      token: state.token,
}),
  }
);

export const useAuthStore = create(authStore);

const connection = window.__REDUX_DEVTOOLS_EXTENSION__?.connect({
  name:"Auth"
})

connection?.init(useAuthStore.getState());

let isUpdateFromDevTools = false;

useAuthStore.subscribe((newState) => {
  if (!isUpdateFromDevTools) {
    connection?.send('State', newState)
  }
});

connection?.subscribe((evt) => {
  if (evt.type === 'DISPATCH') {
    const newState = JSON.parse(evt.state);
    isUpdateFromDevTools = true;
    useAuthStore.setState(newState);
    isUpdateFromDevTools = false;
  }
})

