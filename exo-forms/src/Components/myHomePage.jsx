import { Link } from "react-router-dom"

export function HomePage() {
    return (
        <div>
            <h1>Acceuil</h1>
            <p>Bienvenu sur mon site</p>
            <Link to="/formulaire">Aller sur la page de formulaire !</Link>
            <Link to="/formulaireControle">Aller sur la pade de fomrulaire controlé !</Link>
        </div>
    )
}