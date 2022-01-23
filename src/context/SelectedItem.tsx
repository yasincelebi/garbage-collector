import React, {
  createContext,
  ReactNode,
  SetStateAction,
  useEffect,
} from "react";
export const ItemContext = createContext({
  item: undefined as any,
  setItem: (a: any) => {},
});
const SelectedItemProvider = ({ children }: { children?: ReactNode }) => {
  const [item, setItem] = React.useState();

  return (
    <ItemContext.Provider value={{ item, setItem }}>
      {children}
    </ItemContext.Provider>
  );
};

export default SelectedItemProvider;
