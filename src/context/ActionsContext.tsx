import React, {Children, createContext} from 'react';

export interface ActionsContextProp {
  actionInformation: ActionData | undefined;
  setActionInformation: React.Dispatch<
    React.SetStateAction<ActionData | undefined>
  >;
}

export const Context = createContext({} as ActionsContextProp);

export const ContextProvider = ({children}: any) => {};
