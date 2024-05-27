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
  return (
    <div className="flex flex-col p-[20px] text-title8 min-h-[98px] bg-main-200 rounded-[20px] cursor-pointer min-w-[360px] max-w-[360px] mt-[15px] shadow-md">
      {title}
    </div>
    //   <div
    //     className={
    //       index == selectedIndex
    //         ? `flex flex-col p-[20px] bg-main-200 rounded-[20px] cursor-pointer min-w-[360px] max-w-[360px] mt-[15px] shadow-md`
    //         : `flex flex-col p-[20px] bg-white rounded-[20px] cursor-pointer min-w-[360px] max-w-[360px] mt-[15px] shadow-sm`
    //     }
    //     onClick={() => onClickCard(index)}
    //   >
    //     <div className="text-title8 h-[58px]">{title}</div>
    //   </div>
  );
};

export default ExperienceCard;
