function ExtraInfoCard({label,value}) {
  return (
    <div className="dark:bg-neutral-800 bg-neutral-150 border h-[118px] border-neutral-200 dark:border-neutral-600 flex flex-col gap-6 justify-between p-5 rounded-xl">
      <p className="dark:text-neutral-200 text-neutral-600 font-medium leading-[120%]">
        {label}
      </p>
      <p className="text-3xl font-light md:tracking-wide">{value}</p>
    </div>
  );
}

export default ExtraInfoCard
