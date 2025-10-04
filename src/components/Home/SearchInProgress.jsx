function SearchInProgress() {
  const url = import.meta.env.BASE_URL;
  return (
    <div className="min-w-full z-50 border border-neutral-200 dark:border-neutral-700 absolute left-0 top-16 flex gap-2  lg:min-w-[526px] rounded-lg bg-neutral-150 dark:bg-neutral-800 p-2">
      <div className="gap-2.5 px-2 py-2.5 flex items-center">
        <img
          src={url+"/assets/images/icon-loading.svg"}
          alt="search loading"
          className="w-4 h-5"
        />
        <p className="text-neutral-900 dark:text-neutral-0 text-[16px] font-medium">
          Search in progress
        </p>
      </div>
    </div>
  );
}

export default SearchInProgress;
