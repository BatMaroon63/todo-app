function StatsCards({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(
    (task) => task.completed
  ).length;
  const pending = total - completed;

  const cards = [
    {
      title: "Total Tasks",
      value: total,
      color:
        "from-cyan-500 to-blue-500",
      border:
        "border-cyan-400",
    },
    {
      title: "Completed",
      value: completed,
      color:
        "from-green-500 to-emerald-600",
      border:
        "border-green-400",
    },
    {
      title: "Pending",
      value: pending,
      color:
        "from-yellow-400 to-orange-500",
      border:
        "border-yellow-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

      {cards.map((card) => (

        <div
          key={card.title}
          className={`
            relative
            overflow-hidden
            rounded-2xl
            border
            ${card.border}
            bg-slate-900/80
            backdrop-blur-md
            shadow-xl
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-cyan-500/20
            group
          `}
        >

          <div
            className={`
              absolute
              inset-0
              opacity-10
              bg-gradient-to-br
              ${card.color}
            `}
          />

          <div className="relative p-6">

            <h3 className="text-slate-400 text-sm uppercase tracking-widest">

              {card.title}

            </h3>

            <h1 className="text-5xl font-black text-white mt-3 group-hover:scale-110 transition-transform duration-300">

              {card.value}

            </h1>

          </div>

        </div>

      ))}

    </div>
  );
}

export default StatsCards;