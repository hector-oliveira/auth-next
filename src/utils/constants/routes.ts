export const AUTH_ROUTES = {
  SIGN_IN: "/sign-in",
  INITIAL: "/",
} as const;

export const APP_ROUTES = {
  HOME: "/",
};

export const ROUTES = {
  ...AUTH_ROUTES,
  ...APP_ROUTES,
} as const;
