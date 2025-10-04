import { useSelector } from "react-redux";
import CheckMark from "../Svgs/CheckMark";


function UnitGroup({ group, selected, setSelected, isLast }) {
  const { fill } = useSelector((state) => state.theme);

  return (
    <div className="space-y-1">
      <p className="text-sm text-neutral-400 dark:text-neutral-300 px-3">
        {group.label}
      </p>
      <div
        className={`${
          isLast ? "" : "border-b"
        } flex flex-col gap-1 border-b-neutral-200 dark:border-b-neutral-500`}
      >
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
                onChange={() => setSelected(group.key, opt.value)}
                checked={isSelected}
              />
              <label
                htmlFor={id}
                className={`flex justify-between items-center rounded-md px-3 py-2 text-sm ${
                  isSelected
                    ? "dark:bg-neutral-700 bg-neutral-100 text-neutral-900 dark:text-neutral-0"
                    : "dark:hover:bg-neutral-700 hover:bg-neutral-100"
                }`}
              >
                {opt.label}
                {isSelected && <CheckMark fill={fill} />}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UnitGroup;
