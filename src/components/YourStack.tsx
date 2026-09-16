interface YourStackProps {
  selectedTechnologies: any[];
  handleRemove: (id: number) => void;
  handleRemoveAll: () => void;
}

const YourStack = ({
  selectedTechnologies,
  handleRemove,
  handleRemoveAll,
}: YourStackProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4">
      {/* Heading */}
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-900">
            Your Stack
          </h3>

          <span className="rounded-full bg-pink-100 px-2.5 py-1 text-xs font-semibold text-pink-600">
            {selectedTechnologies.length}
          </span>
        </div>

        <p className="mt-1 text-xs text-gray-400">
          Technologies selected in your stack.
        </p>
      </div>

      {/* Empty State */}
      {selectedTechnologies.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-200 py-8 text-center">
          <p className="text-sm text-gray-400">
            Your stack is empty
          </p>

          <p className="mt-1 text-xs text-gray-300">
            Add technologies to build your stack.
          </p>
        </div>
      ) : (
        <>
          {/* Selected Technologies */}
          <div className="space-y-2">
            {selectedTechnologies.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-2"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-5 w-5 object-contain"
                    />
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-gray-800">
                      {technology.name}
                    </h4>

                    <p className="text-[10px] text-gray-400">
                      {technology.category}
                    </p>
                  </div>
                </div>

                {/* Remove */}
                <button
                  onClick={() => handleRemove(technology.id)}
                  className="text-sm text-gray-400 hover:text-red-500"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Remove All */}
          <button
            onClick={handleRemoveAll}
            className="mt-4 w-full rounded-xl border border-red-200 py-2 text-xs font-semibold text-red-500 hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default YourStack;