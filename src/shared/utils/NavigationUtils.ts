import AppRouter, { homePath, loginPath } from "../../AppRouter.tsx";

const NavigationUtils = {
  goToHome: () => AppRouter.navigate(homePath),
  goToLogin: () => AppRouter.navigate(loginPath),
  goTo: (path: string) => AppRouter.navigate(path) //redirect(path) // 'redirect' function is not usable in useEffects
};

export default NavigationUtils;
