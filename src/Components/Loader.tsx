import loader from "../Assests/Gifs/loader.gif";

const Loader = () => {
  return (
    <div className="w-auto h-16 flex items-center justify-center pt-4">
      <img src={loader} alt="Loader" className="w-7 h-7 object-cover" />
    </div>
  );
};

export default Loader;
