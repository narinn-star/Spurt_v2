'use client';

import ButtonXL from '@/components/buttons/ButtonXL';
import JobButton from '@/components/buttons/JobButton';
import {
  allJobGroupCodeMap,
  allJobGroupList,
  allJobGroupNameMap,
} from '@/const/jobGroups';
import { jobState } from '@/status/jobStatus';
import { useRecoilState } from 'recoil';

export default function SelectJob() {
  const [job, setJob] = useRecoilState(jobState);

  const handleJobSelect = (selectedJob: string) => {
    setJob(allJobGroupCodeMap.get(selectedJob)?.name as string);
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
              label={item}
              selected={item === allJobGroupNameMap.get(job)?.code}
              onClick={() => handleJobSelect(item)}
            />
          );
        })}
      </div>
      <div className="flex">
        <ButtonXL style={{ backgroundColor: '#302e2e' }}>
          이 직군으로 저장하기
        </ButtonXL>
      </div>
    </div>
  );
}
