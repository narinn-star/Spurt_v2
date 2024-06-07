interface ExperienceCardProps {
  index?: number;
  selectedIndex?: number;
  title: string;
  onClickCard?: (value: number) => void;
}

const ExperienceCard = ({
  index,
  selectedIndex,
  title,
  onClickCard,
}: ExperienceCardProps) => {
  const commonClasses =
    'flex flex-col p-[20px] text-heading1 rounded-[20px] cursor-pointer min-h-[98px] min-w-[360px] max-w-[360px] mt-[15px]';
  const optionClasses =
    index == selectedIndex ? 'bg-main-200 shadow-md' : 'bg-white shadow-sm';
  const className = `${commonClasses} ${optionClasses}`;
  return (
    <button className={className}>{title}</button>
    //   <div
    //     className={
    //       index == selectedIndex
    //         ? `bg-main-200 rounded-[20px] cursor-pointer min-w-[360px] max-w-[360px] mt-[15px] shadow-md`
    //         : `bg-white rounded-[20px] cursor-pointer min-w-[360px] max-w-[360px] mt-[15px] shadow-sm`
    //     }
    //     onClick={() => onClickCard(index)}
    //   >
    //     <div className="text-title8 h-[58px]">{title}</div>
    //   </div>
  );
};

export default ExperienceCard;
