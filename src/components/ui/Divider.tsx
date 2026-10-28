const Divider = () => {
  return (
    <div aria-hidden="true" className="flex items-center justify-center gap-2">
      <span className="w-8 border-t border-current" />
      <svg
        width="40"
        height="10"
        viewBox="0 0 40 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polyline points="0,5 5,1 10,9 15,1 20,9 25,1 30,9 35,1 40,5" />
      </svg>
      <span className="w-8 border-t border-current" />
    </div>
  );
};

export default Divider;
