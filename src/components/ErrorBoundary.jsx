import Header from "./Header/Header";
import { Link } from "react-router-dom";

function ErrorBoundary() {
  return (
    <div className="mx-auto p-4 lg:py-12 lg:px-28">
      <Header />
      <main>
        <div className="mt-16 w-full pt-10 flex flex-col items-center gap-6">
          <img
            src="/assets/images/icon-error.svg"
            alt="error"
            className="w-[42px] h-[50px]"
          />
          <h1 className="font-bold text-[52px] font-grotesque">
            Something went wrong
          </h1>
          <p className="text-xl leading-[120%] font-medium text-neutral-200 text-center">
            We couldn’t connect to the server (API error). Please try <br />
            again in a few moments.
          </p>
          <button
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-[#262540]"
            onClick={() => {
              window.location.reload();
            }}
          >
            <i class="fa-solid fa-arrows-rotate"></i>
            Retry
          </button>
        </div>
      </main>
    </div>
  );
}

export default ErrorBoundary;
