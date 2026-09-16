import { Suspense, useState } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

const technologiesFetch = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();

  return data;
};

const technologiesPromise = technologiesFetch();

const App = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  const handleAddToStack = (technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      return;
    }

    setSelectedTechnologies([
      ...selectedTechnologies,
      technology,
    ]);
  };

  return (
    <>
      <Nav />

      <Banner />

      <div className="container mx-auto my-8">
        <h2 className="text-2xl font-bold">
          Selected: {selectedTechnologies.length}
        </h2>

        <div className="mt-4">
          {selectedTechnologies.map((technology) => (
            <p key={technology.id}>
              {technology.name}
            </p>
          ))}
        </div>
      </div>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Technologies
          technologiesPromise={technologiesPromise}
          handleAddToStack={handleAddToStack}
          selectedTechnologies={selectedTechnologies}
        />
      </Suspense>
      <Footer></Footer>
    </>
  );
};

export default App;