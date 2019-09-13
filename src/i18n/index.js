import React, { useReducer } from "react"
import EN from "./en.json"
import PT from "./pt.json"

const translations = {
  en: EN,
  pt: PT
};

const getTranslate = langCode => key => translations[langCode][key] || key;

const initialState = {
  langCode: "en",
  translate: getTranslate("en"),
};

export const I18nContext = React.createContext(initialState);

export const I18nContextProvider = ({ children }) => {
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "setLanguage":
        return {
          langCode: action.payload,
          translate: getTranslate(action.payload),
        };
      default:
        return { ...initialState };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <I18nContext.Provider value={{ ...state, dispatch }}>
      {children}
    </I18nContext.Provider>
  );
};