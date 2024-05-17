import { ChangeEvent, FormEvent, useState } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../store/store";
import { Pair } from "../types";
import Alert from "./Alert";

export default function CriptoSearchForm() {
    const { cryptoCurrencies, fetchData } = useCryptoStore();
    const [pair, setPair] = useState<Pair>({
        currency: '',
        criptoCurrency: ''
    })
    const [error, setError] = useState('')

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (Object.values(pair).includes('')) {
            setError('Hay valores vacíos')
            return
        }
        setError('')

        fetchData(pair);

    }

    return (
        <form className="form"
            onSubmit={handleSubmit}
        >
            {error && (<Alert >{error}</Alert>)}

            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select name="currency" id="currency" value={pair.currency} onChange={handleChange}>
                    <option value="">-- Seleccione</option>
                    {currencies.map(currency => (
                        <option
                            key={currency.code}
                            value={currency.code}>
                            {currency.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor="criptoCurrency">Criptomoneda:</label>
                <select name="criptoCurrency" id="criptoCurrency" value={pair.criptoCurrency} onChange={handleChange}>
                    <option value="">-- Seleccione</option>
                    {
                        cryptoCurrencies.map(crypto => (
                            <option
                                key={crypto.CoinInfo.FullName}
                                value={crypto.CoinInfo.Name}
                            >
                                {crypto.CoinInfo.FullName}
                            </option>
                        ))
                    }
                </select>
            </div>

            <input type="submit" value="Cotizar" />
        </form>
    );
};