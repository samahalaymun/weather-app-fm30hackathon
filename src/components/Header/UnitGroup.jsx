function UnitGroup({ group, selected, setSelected }) {
  return (
    <div className="space-y-1">
      <p className="text-sm text-neutral-300 px-3">{group.label}</p>
      <div className="flex flex-col gap-1  border-b border-b-neutral-500">
        {group.options.map((opt) => {
          const isSelected = selected[group.key] === opt.value;
          const id = `${group.key}-${opt.value.replace(/\W/g, "")}`;
          return (
            <div key={opt.value}>
              <input
                id={id}
                type="radio"
                value={opt.value}
                name={group.key}
                className="hidden"
                onChange={() => setSelected( group.key, opt.value )}
                checked={isSelected}
              />
              <label
                htmlFor={id}
                className={`flex justify-between rounded-md px-3 py-2 text-sm ${
                  isSelected
                    ? "bg-neutral-700 text-neutral-0"
                    : "hover:bg-neutral-700"
                }`}
              >
                {opt.label}
                {isSelected && <img src="/assets/images/icon-checkmark.svg" />}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UnitGroup;
