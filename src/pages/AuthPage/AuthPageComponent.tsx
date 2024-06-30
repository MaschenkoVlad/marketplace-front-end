import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

import * as css from "./AuthPageComponent.module.scss";

const AuthPage = () => {
  const { t } = useTranslation();

  return (
    <div className={css.root}>
      <div className={css.intro}>
        <h1>{t("AuthPage.heading")}</h1>
        <p>{t("AuthPage.description")}</p>
        <button>{t("AuthPage.readMoreBtn")}</button>
      </div>
      <div className={css.authForm}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthPage;
