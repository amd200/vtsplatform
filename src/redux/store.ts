import { authApi } from "@/features/auth/services/authApi";
import { cartApi } from "@/features/student/services/cartApi";
import { lessonContentApi } from "@/features/student/services/lessonContentApi";
import { paymentApi } from "@/features/student/services/paymentApi";
import { studentApi } from "@/features/student/services/studentApi";
import { dashboardApi } from "@/services/dashboardApi";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [studentApi.reducerPath]: studentApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [lessonContentApi.reducerPath]: lessonContentApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware, dashboardApi.middleware, studentApi.middleware, cartApi.middleware, lessonContentApi.middleware, paymentApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
