import { FadeLoader } from "react-spinners";
type Props = {
  message?: string;
};
const Loading = ({ message }: Props) => {
  return (
    <div className="mx-auto flex items-center justify-center flex-col gap-4  h-full min-h-[50vh]">
      {message && <p className="text-accent-foreground text-lg">{message}</p>}
      <FadeLoader className="text-md" color="var(--primary)" />
    </div>
  );
};

export default Loading;
