function ExtraInfoCard({label,value}) {
  return (
    <div className="bg-neutral-800 border h-[118px] border-neutral-600 flex flex-col gap-6 justify-between p-5 rounded-xl">
      <p className="text-neutral-200 font-medium leading-[120%]">{label}</p>
      <p className="text-3xl font-light md:tracking-wide">{value}</p>
    </div>
  );
}

export default ExtraInfoCard
