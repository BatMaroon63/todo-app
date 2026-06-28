function FilterButtons({
  currentFilter,
  setCurrentFilter,
}) {
  const filters = [
    "all",
    "completed",
    "pending",
  ];

  return (
    <div className="flex justify-center gap-4 mb-6">

      {filters.map((filter) => (

        <button
          key={filter}
          onClick={() =>
            setCurrentFilter(filter)
          }
          className={`px-5 py-2 rounded-lg font-semibold transition ${
            currentFilter === filter
              ? "bg-cyan-500 text-white"
              : "bg-white text-black hover:bg-gray-200"
          }`}
        >
          {filter.charAt(0).toUpperCase() +
            filter.slice(1)}
        </button>

      ))}

    </div>
  );
}

export default FilterButtons;