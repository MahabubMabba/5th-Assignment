import { Suspense, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Technologies from "./components/Technologies";

const technologiesFetch = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();

  return data;
};

const technologiesPromise = technologiesFetch();

const App = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  // Add to Stack
  const handleAddToStack = (technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedTechnologies([
      ...selectedTechnologies,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove one technology
  const handleRemove = (id) => {
    const technology = selectedTechnologies.find(
      (item) => item.id === id
    );

    setSelectedTechnologies(
      selectedTechnologies.filter((item) => item.id !== id)
    );

    toast.success(`${technology.name} removed from your stack!`);
  };

  // Remove all
  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      return;
    }

    setSelectedTechnologies([]);

    toast.success("All technologies removed from your stack!");
  };

  return (
    <>
      <Nav />

      <Banner />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Technologies
          technologiesPromise={technologiesPromise}
          handleAddToStack={handleAddToStack}
          selectedTechnologies={selectedTechnologies}
          handleRemove={handleRemove}
          handleRemoveAll={handleRemoveAll}
        />
      </Suspense>

      <ToastContainer position="top-center" />
    </>
  );
};

export default App;