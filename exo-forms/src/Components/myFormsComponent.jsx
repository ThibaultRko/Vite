import { Link } from "react-router-dom"
import { useRef } from 'react'


export function MyForms() {
    const inputUserName = useRef(null)
    const inputEmail = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        const usernameValue = inputUserName.current.value;
        const emailValue = inputEmail.current.value;

        //Traitement des données
        console.log("nom d'utilisateur:", usernameValue);
        console.log("adresse e-mail:", emailValue);

        //reinitialisation des données
        inputUserName.current.value = '';
        inputEmail.current.value = '';
    }

    return (
        <div>
        <h2>Formulaire</h2>
        <form onSubmit={handleSubmit}>
            <input
                className="container" 
                type="text"
                ref={inputUserName}
                placeholder="Nom d'utilisateur"
            />
            <input 
                className="container"
                type="text"
                ref={inputEmail}
                placeholder="Adresse e-mail"
            />
            <button type="submit">soumettre</button>
        </form>
        <Link to='/'>Aller sur la page d'acceuil !</Link>
        </div>
    )
}