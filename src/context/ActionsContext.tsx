import React, {Children, createContext, useState} from 'react';

export interface ActionsContextProp {
  actionInformation: ActionData | undefined;
  setActionInformation: React.Dispatch<
    React.SetStateAction<ActionData | undefined>
  >;
}

export const Context = createContext({} as ActionsContextProp);

export const ContextProvider = ({children}: any) => {
  const [actionInformation, setActionInformation] = useState<ActionData>();

  return (
    <Context.Provider value={{actionInformation, setActionInformation}}>
      {children}
    </Context.Provider>
  );
};
