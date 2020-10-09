import React from "react";
import MainConteiner from "./conteiners/MainConteiner";
import { useTranslation } from "react-i18next";

const App = (props) => {
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div>
      <fieldset className="main-block">
        <legend className="text-first">{t("Choose_lang.1")}</legend>
        <div className="button-block">
          <button className="button-item" onClick={() => handleClick("en")}>
            {t("English.1")}
          </button>
          <button className="button-item" onClick={() => handleClick("uk")}>
            {t("Ukrainian.1")}
          </button>
          <button className="button-item" onClick={() => handleClick("ru")}>
            {t("Russian.1")}
          </button>
        </div>
      </fieldset>
      <h1 className="name lg-heading">{t("Notes.1")}</h1>
      <fieldset className="main-block">
        <legend className="text-first">{t("Write_note.1")}</legend>
        <MainConteiner state={props.state} />
      </fieldset>

      <h4 className="footter sm-heading text-second">{t("Thanks.1")}</h4>
    </div>
  );
};

export default App;
