import { useSelector } from "react-redux";
import Retry from "./Svgs/Retry"

function ErrorPage() {
  const url = import.meta.env.BASE_URL;
  const { fill } = useSelector((state) => state.theme);

  return (
    <div className="mt-16 w-full pt-10 flex flex-col items-center gap-6">
      <img
        src={url + "/assets/images/icon-error.svg"}
        alt="error-icon"
        className="w-[42px] h-[50px]"
      />
      <h1 className="font-bold text-[52px] font-grotesque">
        Something went wrong
      </h1>
      <p className="text-xl leading-[120%] font-medium text-neutral-400 dark:text-neutral-200 text-center">
        We couldn’t connect to the server (API error). Please try <br />
        again in a few moments.
      </p>
      <button
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-neutral-150 dark:bg-[#262540]"
        onClick={() => {
          window.location.reload();
        }}
      >
        <Retry fill={fill} />
        Retry
      </button>
    </div>
  );
}

export default ErrorPage;
