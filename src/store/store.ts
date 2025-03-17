import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";
import storageSession from "redux-persist/lib/storage/session";
import { persistStore, persistReducer } from "redux-persist";
import { authSlice } from "./slices/authSlice";
import { apiAuth } from "./api/enhanced/enhancedApiAuth";
import { apiManager } from "./api/enhanced/enhancedApiManager";
import { apiMinistryCategory } from "./api/enhanced/enhancedApiMinistryCategory";
import { apiMinistry } from "./api/enhanced/enhancedApiMinistry";
import { kobiApi } from "./api/kobiApi";
import { companySlice } from "./slices/companySlice";
import { extentedMinistryApi } from "./api/extended/extendedMinistryApi";
import { appSlice } from "./slices/appSlice";

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["auth", "company", "app"],
};

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  company: companySlice.reducer,
  app: appSlice.reducer,
  [kobiApi.reducerPath]: kobiApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares: Middleware[] = [
  apiAuth.middleware,
  apiManager.middleware,
  apiMinistryCategory.middleware,
  apiMinistry.middleware,
  extentedMinistryApi.middleware,
];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(middlewares),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
