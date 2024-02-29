import { useState } from "react";

export default function ProfForm({ search }) {
    const [name, setName] = useState("");

    function handleChange(evt) {
        setName(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault(); // Corrected typo here
        search(name);
        setName("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleChange} />
            <button type="submit">Search</button> {/* Added type="submit" to the button */}
        </form>
    );
}
