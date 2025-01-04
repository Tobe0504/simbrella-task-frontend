import { capitalize } from "../Helpers/capitalize";

const GreetingComponent = () => {
  //   Utils

  const getCurrentHours = () => {
    const date = new Date();
    const hours = date.getHours();

    const textClasses = "font-main text-lg font-normal text-grey-200";

    if (hours > 0 && hours < 12) {
      return <p className={textClasses}>Good morning ⛅️</p>;
    } else if (hours >= 12 && hours < 17) {
      return <p className={textClasses}>Good afternoon 🌤️</p>;
    } else if (hours >= 17) {
      return <p className={textClasses}>Good evening 🌙</p>;
    }
  };

  return (
    <section className="mb-4">
      {getCurrentHours()}
      <h4 className="font-main text-4xl font-normal text-black">
        {capitalize("Simbrella")}
      </h4>
    </section>
  );
};

export default GreetingComponent;
