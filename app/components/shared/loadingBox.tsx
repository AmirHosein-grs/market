interface LoadingBoxProps {
  className?: string;
}

const LoadingBox = ({ className }: LoadingBoxProps) => {
  return (
    <>
      <div>
        <div
          className={`w-[100%] h-full flex justify-center flex-center  text-white ${
            className ?? ""
          }`}
        >
          <div
            style={{ width: `50px`, height: `50px` }}
            className="animate-spin"
          >
            <div className="h-full w-full border-4 border-t-black border-b-black rounded-[50%]"></div>
          </div>
          <div className="p-2 ">loading ...</div>
        </div>
      </div>
    </>
  );
};

export default LoadingBox;
