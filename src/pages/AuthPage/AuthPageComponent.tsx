import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AuthPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <h1>{t("AuthPage.heading")}</h1>
        <p>{t("AuthPage.description")}</p>
        <button>{t("AuthPage.readMoreBtn")}</button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthPage;
