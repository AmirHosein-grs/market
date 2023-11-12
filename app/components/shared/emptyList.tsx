import { EyeSlashIcon } from "@heroicons/react/24/outline";

interface EmptyListProps {
  title: string;
  description: string;
  className?: string;
}

const EmptyList = ({
  title,
  description,
  className = undefined,
}: EmptyListProps) => {
  return (
    <div
      className={`text-center border-2 border-white border-dashed rounded-lg p-12 py-24 ${
        className ?? ""
      }`}
    >
      <EyeSlashIcon className="mx-auto h-12 w-12 text-white" />
      <h3 className="mt-2 text-base text-white">{title}</h3>
      <p className="mt-1 text-sm text-white"></p>
    </div>
  );
};

export default EmptyList;
