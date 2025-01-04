type SectionsHeaderTypes = {
  header: string;
  caption?: string;
  mini?: boolean;
};

const SectionsHeader = ({ header, caption, mini }: SectionsHeaderTypes) => {
  return (
    <section className="mb-6">
      <h4
        className={`font-normal  ${
          mini ? "lg:text-2xl text-lg" : "lg:text-4xl text-2xl"
        } text-black`}
      >
        {header}
      </h4>
      {caption && (
        <p className="font-normal lg:text-lg text-grey-200 text-sm">
          {caption}
        </p>
      )}
    </section>
  );
};

export default SectionsHeader;
