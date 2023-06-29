import React from 'react';

export const ActiveProductIdContext = React.createContext({
  activeProductId: localStorage.getItem('activeProduct') ?? 'all',
  setActiveProductId: () => {},
});

export const ActiveProductIdContextProvider = ({children}) => {
  const [activeProductId, setActiveProductId] = React.useState(localStorage.getItem('activeProduct') ?? 'all');
  const activeProductIdContextValue = { activeProductId, setActiveProductId };

  React.useEffect(() => {
    localStorage.setItem('activeProduct', activeProductId)
  }, [activeProductId])

  return (
    <ActiveProductIdContext.Provider value={activeProductIdContextValue}>
      {children}
    </ActiveProductIdContext.Provider>
  );
}
