interface TechnologyCardProps {
  technology: any;
  handleAddToStack: (technology: any) => void;
  selectedTechnologies: any[];
}

const TechnologyCard = ({
  technology,
  handleAddToStack,
  selectedTechnologies,
}: TechnologyCardProps) => {
  const isAdded = selectedTechnologies.some(
    (item) => item.id === technology.id
  );

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      
      {/* Top */}
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-9 w-9 object-contain"
          />
        </div>

        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-600">
          {technology.badge}
        </span>
      </div>

      {/* Name & Description */}
      <div className="mt-5">
        <h3 className="text-xl font-bold text-gray-900">
          {technology.name}
        </h3>

        <p className="mt-2 min-h-12 text-sm leading-6 text-gray-500">
          {technology.description}
        </p>
      </div>

      {/* Category & Difficulty */}
      <div className="mt-5 flex items-center gap-2">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
          {technology.category}
        </span>

        <span className="text-sm text-gray-500">
          {technology.difficulty}
        </span>
      </div>

      {/* Rating */}
      <div className="mt-4 flex items-center gap-2">
        <span className="text-yellow-400">★</span>

        <span className="text-sm font-semibold text-gray-700">
          {technology.rating}
        </span>
      </div>

      {/* Button */}
      <button
        onClick={() => handleAddToStack(technology)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-xl px-4 py-3 text-sm font-semibold ${
          isAdded
            ? " bg-gray-200 text-gray-500"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "Selected" : "Add to Stock"}
      </button>
    </div>
  );
};

export default TechnologyCard;