interface radioInputProps {}

const RadioInput = ({}: radioInputProps) => {
  return (
    <div className="md:flex md:justify-between w-auto hidden opacity-70 ">
      <form>
        <div className="flex justify-between w-max ">
          <input type="radio" id="default-radio" />
          <span className="p-3 text-gray-500 ">Availible for Trading</span>
        </div>
      </form>
    </div>
  );
};

export default RadioInput;
