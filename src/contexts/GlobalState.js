import GlobalContext from "./GlobalContext"

const GlobalState = ({children}) => {
    return <GlobalContext.Provider>{children}</GlobalContext.Provider>
}

export default GlobalState

// Ultimo exercicio, não consegui completar. Não estou usando este componente.