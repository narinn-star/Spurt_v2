interface ButtonProps {
  label: string;
  onClick: () => void;
  selected: boolean;
}

const JobButton: React.FC<ButtonProps> = ({ label, onClick, selected }) => {
  return selected ? (
    <button
      onClick={onClick}
      className="w-[245px] h-40 px-[59px] py-[69px] text-body1 flex justify-center items-center gap-[10px] bg-main-100 rounded-3xl border border-main-400 hover:bg-main-100 hover:border-main_lines"
    >
      {label}
    </button>
  ) : (
    <button
      onClick={onClick}
      className="w-[245px] h-40 px-[59px] py-[69px] text-body1 flex justify-center items-center gap-[10px] bg-white rounded-3xl border border-gray_line hover:bg-main-100 hover:border-main_lines"
    >
      {label}
    </button>
  );
};

export default JobButton;
