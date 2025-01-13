import { countries } from "../../data/countries";
import styles from './Form.module.css'
export default function Form() {
    return (
        <form action="" className={styles.form}>

            <div className={styles.field}>
                <label htmlFor="city">Ciudad:</label>
                <input type="text" name="city" id="city" placeholder="Ciudad" />
            </div>
            <div className={styles.field}>
                <label htmlFor="country">País:</label>
                <select name="country" id="country">
                    <option value="colombia">-- Seleccciona un país --</option>
                    {countries.map(country => (
                        <option key={country.code} value={country.code}>{country.name}</option>
                    ))}
                </select>
            </div>

            <input type="submit" value="Consultar Clima" />
        </form>
    )
}
