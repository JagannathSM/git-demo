import React, {createContext, useContext}from 'react'

const SchoolContext = createContext();

function SchoolProvider({children}) {
    const schName = "Happy Day";
    const stdName = "Jagan";
  return (
    <SchoolContext.Provider value={[schName,stdName]}>
        {children}
    </SchoolContext.Provider>
  )
}

export const useSchool = () => {
    return useContext(SchoolContext);
}

export default SchoolProvider
