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
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      {/* Top */}
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-6 w-6 object-contain"
          />
        </div>

        <span className="rounded-full bg-pink-50 px-2.5 py-1 text-[10px] font-medium text-pink-500">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <div className="mt-3">
        <h3 className="text-base font-bold text-gray-900">
          {technology.name}
        </h3>

        <p className="mt-1 min-h-10 text-[11px] leading-4 text-gray-400">
          {technology.description}
        </p>
      </div>

      {/* Category & Difficulty */}
      <div className="mt-3 flex items-center justify-between">
        <span className="rounded-full bg-gray-100 px-2 py-1 text-[9px] font-medium text-gray-600">
          {technology.category}
        </span>

        <span className="text-[9px] text-gray-400">
          {technology.difficulty}
        </span>
      </div>

      {/* Rating */}
      <div className="mt-2 flex items-center gap-1">
        <span className="text-yellow-400">★</span>

        <span className="text-[10px] font-semibold text-gray-500">
          {technology.rating}
        </span>
      </div>

      {/* Button */}
      <button
        onClick={() => handleAddToStack(technology)}
        disabled={isAdded}
        className={`mt-3 w-full rounded-lg px-3 py-2 text-[10px] font-semibold ${
          isAdded
            ? "cursor-not-allowed bg-gray-200 text-gray-400"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;