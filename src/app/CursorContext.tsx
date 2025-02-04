"use client";

import React, { createContext, useState, ReactNode, useEffect } from "react";

export enum CursorType {
  default,
  viewPost,
  externalLink,
  backLink,
}

interface CursorContextProps {
  cursor: CursorType;
  setCursor: (cursor: CursorType) => void;
  active: boolean;
  setActive: (active: boolean) => void;
  icon: string;
}

const CursorContext = createContext<CursorContextProps>({
  cursor: CursorType.default,
  setCursor: () => {},
  active: false,
  setActive: () => {},
  icon: "",
});

interface CursorProviderProps {
  children: ReactNode;
}

const icons = {
  [CursorType.default]: "",
  [CursorType.viewPost]: "/icons/whiteArrowRight.svg",
  [CursorType.externalLink]: "/icons/externalLink.svg",
  [CursorType.backLink]: "/icons/whiteArrowLeft.svg",
};

const CursorProvider = (props: CursorProviderProps) => {
  const { children } = props;

  const [cursor, setCursor] = useState<CursorType>(CursorType.default);
  const [active, setActive] = useState<boolean>(false);

  return (
    <CursorContext.Provider
      value={{ cursor, setCursor, active, setActive, icon: icons[cursor] }}
    >
      {children}
    </CursorContext.Provider>
  );
};

const useCursor = (cursorType: CursorType) => {
  const { setCursor, setActive } = React.useContext(CursorContext);

  const handleMouseEnter = () => {
    setCursor(cursorType);
    setActive(true);
  };

  const handleMouseLeave = () => {
    console.log("leaving");
    setActive(false);
  };

  const handleClick = () => {
    setActive(false);
  };

  return {
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
  };
};

export { CursorContext, CursorProvider, useCursor };
