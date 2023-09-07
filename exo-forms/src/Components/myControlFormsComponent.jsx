import { Link } from "react-router-dom";
import { useRef, useState } from "react";

export function MyControlForms() {
  // Initialize state with correct IDs
  const [users, setUsers] = useState([
    { id: 1, name: "Kevin" },
    { id: 2, name: "Benji" },
    { id: 3, name: "Titouan" },
  ]);

  const [newUser, setNewUser] = useState("");

  const handleChange = (event) => {
    const valueAfterChange = event.target.value;
    setNewUser(valueAfterChange);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const usersCopy = [...users];
    const id = new Date().getTime();
    const name = newUser;
    usersCopy.push({ id, name });
    setUsers(usersCopy);
    setNewUser("");
  };

  const deleteElement = (id) => {
    const usersCopy = [...users];
    const usersCopyUpdated = usersCopy.filter((element) => {
      return element.id !== id;
    });
    setUsers(usersCopyUpdated);
  };

  return (
    <div>
      <h1>Ma liste d'utilisateurs</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newUser}
          placeholder="Ajouter un utilisateur"
          onChange={handleChange}
        />
        <button type="submit">Ajouter</button>
      </form>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            {user.name}
            <button onClick={() => deleteElement(user.id)}>Supprimer</button>
          </div>
        ))}
      </div>
      <Link to="/">Aller sur la page d'accueil !</Link>
    </div>
  );
}
