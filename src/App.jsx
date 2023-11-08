import { useState } from "react";
import { useGetPokemonByNameQuery } from "./services/pokemon";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const { data, error, isLoading } = useGetPokemonByNameQuery(
    "pokemon/?offset=20&limit=20"
  );

  const handlePokemonClick = async () => {
    try {
     
      setSelectedPokemon(data);
    } catch (error) {
      // Handle any errors here
      console.error("Error fetching Pokemon details:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {data.results.map((pokemon) => (
          <>
            <li key={pokemon.name}>
              <button
               
                onClick={() => handlePokemonClick(pokemon.name)}
              >
                {pokemon.name}
              </button>
            </li>
          </>
        ))}
      </ul>

      {selectedPokemon && (
        <div>
          <h2>Selected Pokemon: {selectedPokemon.name}</h2>
          {/* Display other details of the selected Pokemon here */}
        </div>
      )}
    </div>
  );
}

export default App;
