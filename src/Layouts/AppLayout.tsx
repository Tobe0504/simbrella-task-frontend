import Header from "../Containers/Header";

type AppLayoutTypes = {
  children: React.ReactNode;
  className?: string;
};

const AppLayout = ({ children, className }: AppLayoutTypes) => {
  return (
    <main className="h-svh py-4 lg:py-[54px] px-0 lg:px-[168px] relative ">
      <Header />
      <section
        className={`min-h-[calc(100svh-54px-170px)] lg:w-[calc(100vw-168px-168px)] w-full py-4 ${className} `}
      >
        {children}
      </section>
    </main>
  );
};

export default AppLayout;
