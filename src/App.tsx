import { useState } from "react";
/*
interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

function App() {
  const [joke, setJoke] = useState<Joke>();

  const handleGetJoke = async () => {
    const response = await fetch(
      "https://jokestemp.neillbogie.repl.co/jokes/general/random"
    );
    const jsonBody: Joke[] = await response.json();
    setJoke(jsonBody[0]);
  };

  // const handleGetJoke = () => {
  //   fetch("https://jokestemp.neillbogie.repl.co/jokes/general/random")
  //     .then((response) => response.json())
  //     .then((jsonBody: Joke[]) => setJoke(jsonBody[0]));
  // };

  if (joke) {
    return (
      <div>
        <h1>Joke app</h1>
        <details>
          <summary>{joke.setup}</summary>
          <p>{joke.punchline}</p>
        </details>
        <hr />
        <button onClick={handleGetJoke}>Get another joke</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Joke app</h1>
        <p>
          Click the button to trigger a <code>fetch</code> that gets a random
          joke from an API!
        </p>
        <button onClick={handleGetJoke}>Get joke</button>
      </div>
    );
  }
}
*/
interface picture{
  message: string;
  status: string;
}

function App(){
  const [pic, setPic]=useState<picture>();
  /*const handleGetPicture = async () => {
    const response = await fetch(
      "https://dog.ceo/api/breeds/image/random"
    );
    const jsonBody: picture[] = await response.json();
    setPic(jsonBody[0]);
    console.log(pic)
  }; */
   const handleGetPicture = () => {
     fetch("https://dog.ceo/api/breeds/image/random")
       .then((response) => response.json())
       .then((jsonBody: picture[]) => setPic(jsonBody[0]));
       console.log(pic);
   }; 

  if (pic) {
    return (
      <div>
        <h1>Dog Picture app</h1>
        
          <img id={pic.message} alt =""/>
          <p>{pic.status}</p>
    
    
        <button onClick={handleGetPicture}>Get another picture</button>
      </div>
    );
  } else {
  return (
    <div>
      <h1>Dog Pic App</h1>
      <p>
        Click the button to trigger a <code>fetch</code> that gets a random
        dog pictur from an API!
      </p>
      <button onClick={handleGetPicture}>Get Picture</button>
    </div>
  );
  }
} 

export default App;
