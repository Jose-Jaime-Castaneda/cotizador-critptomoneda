import { useMemo } from "react";
import { useCryptoStore } from "../store/store";
import Spinner from "./Spinner/Spinner";

export default function CryptoPriceDisplay() {
    const { cryptoPrice, loading } = useCryptoStore()
    const hasResult = useMemo(() => Object.keys(cryptoPrice).length > 0, [cryptoPrice])

    return (
        <div className="result-wrapper">
            {loading ? <Spinner /> : hasResult && (
                <>
                    <h2>
                        Cotización
                    </h2>

                    <div className="result">


                        <img src={`https://cryptocompare.com/${cryptoPrice.IMAGEURL}`} alt="Crypto Logo" />
                        <div>
                            <p>El precio es de: <span>{cryptoPrice.PRICE}</span></p>
                            <p>El precio más alto del día: <span>{cryptoPrice.HIGHDAY}</span></p>
                            <p>El precio más bajo del día: <span>{cryptoPrice.LOWDAY}</span></p>
                            <p>Variación últimas 24hrs: <span>{cryptoPrice.CHANGEPCT24HOUR}</span></p>
                            <p>última actualización: <span>{cryptoPrice.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};