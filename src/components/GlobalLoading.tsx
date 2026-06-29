import { FadeLoader as Loader } from "react-spinners";
function GlobalLoading() {
  return (
    <div className="min-h-64 w-full flex items-center justify-center ">
      <Loader color="var(--primary)" />
    </div>
  );
}

export default GlobalLoading;
