'use client';
import Image from 'next/image';

interface SummaryCardProps {
  //questionId: number;
  title: string;
  isPinned: boolean;
  bgColor?: string;
  //updateExperience: (items: Experience[]) => void;
}

const SummaryCard = ({
  //questionId,
  bgColor,
  title,
  isPinned,
}: //updateExperience,
SummaryCardProps) => {
  //const router = useRouter();

  //   const handlePin = async () => {
  //     await updatePost({
  //       questionId: questionId,
  //       pinIndicator: !isPinned,
  //     } as UpdatePostParam);

  //     const result = await fetchExperience();
  //     updateExperience(result.experienceList);
  //   };

  //   const onClickCard = (questionId: number) => {
  //     router.push({
  //       pathname: '/read',
  //       query: { postId: questionId },
  //     });
  //   };
  const commonClasses =
    'flex flex-col p-[16px]  rounded-[16px] min-w-[226px] max-w-[226px]';
  const optionClasses = bgColor ? 'bg-main-200' : 'bg-main-100';
  const className = `${commonClasses} ${optionClasses}`;
  return (
    <div className={className}>
      <div
        className="text-heading2 h-[152px] cursor-pointer"
        // onClick={() => onClickCard(questionId)}
      >
        {title}
      </div>
      <div className="flex justify-end mt-[14px]">
        <button>
          <Image
            src={
              isPinned ? '/icons/pin-fill-42.svg' : '/icons/pin-stroke-42.svg'
            }
            alt="pinIcon"
            width={42}
            height={42}
            priority
          />
        </button>
      </div>
    </div>
  );
};

export default SummaryCard;
