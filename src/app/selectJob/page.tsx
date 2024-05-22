'use client';

import ButtonXL from '@/components/buttons/ButtonXL';
import JobButton from '@/components/buttons/JobButton';
import { allJobGroupList, jobGroupMap } from '@/const/jobGroups';
import { jobState } from '@/status/jobStatus';
import { useRecoilState } from 'recoil';

export default function SelectJob() {
  const [job, setJob] = useRecoilState(jobState);

  const handleJobSelect = (selectedJob: string) => {
    setJob(jobGroupMap.get(selectedJob)?.name as string);
  };

  const handleSignUp = (selectedJob: string) => {
    // 회원가입 후 라우팅
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-title1 text-center mb-[40px]">
        {/* <p>{session?.user?.name}님은 어떤 직군 면접을</p> */}
        <p>님은 어떤 직군 면접을</p>
        <p>준비하나요?</p>
      </div>
      <div className="flex-col gap-[10px] mb-[80px] grid grid-cols-2">
        {allJobGroupList.map((item) => {
          return (
            <JobButton
              key={item}
              selected={item === jobGroupMap.get(job)?.code}
              onClick={() => handleJobSelect(item)}
            >
              {item}
            </JobButton>
          );
        })}
      </div>
      <div className="flex">
        <ButtonXL onClick={() => handleSignUp(job)}>
          이 직군으로 저장하기
        </ButtonXL>
      </div>
    </div>
  );
}
