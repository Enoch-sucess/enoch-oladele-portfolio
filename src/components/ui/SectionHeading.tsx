type SectionHeadingProps = {
  title: string;
};

const SectionHeading = ({ title }: SectionHeadingProps) => {
  return (
    <h2 className="border-4 border-black font-bold uppercase tracking-[0.3em] text-black text-xl px-6 sm:px-10 py-3 w-fit mx-auto text-center">
      {title}
    </h2>
  );
};

export default SectionHeading;
