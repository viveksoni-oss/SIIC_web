function Domain({ categories, setDomain, domain }) {
  return (
    <aside className="border-2 border-secondary-gray/50 rounded-2xl h-fit py-6">
      <div className="px-3 mb-5 text-lg font-semibold text-[#1f1f1f]/80">
        Domain
      </div>
      <div className="flex gap-3 flex-wrap p-3">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => {
              setDomain((prev) => {
                if (prev === category) {
                  return "All";
                } else {
                  return category;
                }
              });
            }}
            className={
              "py-1 px-2 bg-[#f1f1f1]/95 text-[#1f1f1f] text-xs rounded-full hover:bg-primary-highlight hover:text-white transition-colors " +
              `${domain === category ? "bg-primary-highlight text-white" : ""}`
            }
          >
            {category}
          </button>
        ))}
      </div>
    </aside>
  );
}

export default Domain;
