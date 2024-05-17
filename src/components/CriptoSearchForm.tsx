export default function CriptoSearchForm() {
    return (
        <form className="form">
            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select name="currency" id="currency">
                    <option value="">-- Seleccione</option>
                </select>
            </div>

            <div className="field">
                <label htmlFor="criptoCurrency">Criptomoneda:</label>
                <select name="criptoCurrency" id="criptoCurrency">
                    <option value="">-- Seleccione</option>
                </select>
            </div>

            <input type="submit" value="Cotizar" />
        </form>
    );
};