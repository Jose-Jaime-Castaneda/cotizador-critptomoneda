import { useEffect } from "react"
import CriptoSearchForm from "./components/CriptoSearchForm"
import { useCryptoSrore } from "./store/store"

function App() {
  const fetchCryptos = useCryptoSrore((state) => state.fetchCryptos)

  useEffect(() => {
    fetchCryptos()
  }, [])

  return (
    <>
      <div
        className="container">
        <h1 className="app-title">Cotizador de <span>Criptomonedas</span></h1>

        <div className="content">
          <CriptoSearchForm />
        </div>
      </div>
    </>
  )
}

export default App
