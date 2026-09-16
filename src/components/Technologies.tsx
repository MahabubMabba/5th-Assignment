import { use } from "react";
import TechnologyCard from "./TechnologyCard";

interface TechnologiesProps {
  technologiesPromise: Promise<any[]>;
  handleAddToStack: (technology: any) => void;
  selectedTechnologies: any[];
}

const Technologies = ({
  technologiesPromise,
  handleAddToStack,
  selectedTechnologies,
}: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  return (
    <section className="container mx-auto py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">
          Explore Technologies
        </h2>

        <p className="mt-2">
          Discover the technologies you can add to your stack.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            handleAddToStack={handleAddToStack}
            selectedTechnologies={selectedTechnologies}
          />
        ))}
      </div>
    </section>
  );
};

export default Technologies;