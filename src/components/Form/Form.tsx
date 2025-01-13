import { countries } from "../../data/countries";
import styles from './Form.module.css'
import { ChangeEvent, FormEvent, useState } from "react";
import type { SearchType } from "../../types/index";
export default function Form() {

    const [search, setSearch] = useState<SearchType>({
        city: '',
        country: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(Object.values(search).includes('')){
            console.log('si hay campos vacios');
        }
        console.log(search)
    }

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >

            <div className={styles.field}>
                <label htmlFor="city">Ciudad:</label>
                <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Ciudad"
                    value={search.city}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.field}>
                <label htmlFor="country">País:</label>
                <select
                    name="country"
                    id="country"
                    value={search.country}
                    onChange={handleChange}
                >
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
