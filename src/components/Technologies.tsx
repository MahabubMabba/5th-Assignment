import { use } from "react";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface TechnologiesProps {
  technologiesPromise: Promise<any[]>;
  handleAddToStack: (technology: any) => void;
  selectedTechnologies: any[];
  handleRemove: (id: number) => void;
  handleRemoveAll: () => void;
}

const Technologies = ({
  technologiesPromise,
  handleAddToStack,
  selectedTechnologies,
  handleRemove,
  handleRemoveAll,
}: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  return (
    <section className="container mx-auto py-10">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Explore the{" "}
          <span className="text-pink-600">
            Technologies
          </span>
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-4 gap-6">
        {/* Technology Cards */}
        <div className="col-span-3 grid grid-cols-3 gap-5">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              handleAddToStack={handleAddToStack}
              selectedTechnologies={selectedTechnologies}
            />
          ))}
        </div>

        {/* Your Stack */}
        <div className="col-span-1">
          <YourStack
            selectedTechnologies={selectedTechnologies}
            handleRemove={handleRemove}
            handleRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;