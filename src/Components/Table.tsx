import { capitalize } from "../Helpers/capitalize";

type TableType = {
  headers: string[];
  data: any[];
  header: string;
};

const tableHeaderStyles =
  "flex-1 font-bold text-sm text-black p-4 border-r last:border-none border-grey-300";
const tableBodyStyles =
  "flex-1 font-normal text-sm text-black p-4 border-r last:border-none border-grey-300";

const Table = ({ header, data, headers }: TableType) => {
  return (
    <div>
      <div className="border-2 inline-block px-2 py-1 rounded-[calc(infinity*1px)] font-medium text-sm text-black mb-4">
        {header}
      </div>
      <div className="flex border-b border-grey-300">
        {headers.map((header, index) => {
          return (
            <span
              key={header}
              className={`${tableHeaderStyles} ${
                index === 0 || index === 2 || index === 3
                  ? "hidden lg:block"
                  : "block"
              }`}
            >
              {header.toUpperCase()}
            </span>
          );
        })}
      </div>
      <div>
        {data?.map(
          (item, rowIndex) =>
            item?.status && (
              <div
                className="flex border-b last:border-none border-grey-300"
                key={rowIndex}
              >
                {headers.map((_, colIndex) => (
                  <span
                    key={colIndex}
                    className={`${tableBodyStyles} ${
                      colIndex === 0 || colIndex === 2 || colIndex === 3
                        ? "hidden lg:block"
                        : "block"
                    }`}
                  >
                    <span>
                      {capitalize(
                        String(
                          Object.values(item)[colIndex] as string
                        ) as string
                      )}
                    </span>
                  </span>
                ))}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Table;
