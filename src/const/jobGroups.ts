export interface JobGroup {
  name: string;
  code: string;
}

const developer: JobGroup = {
  name: 'DEVELOPER',
  code: '개발',
};

const designer: JobGroup = {
  name: 'DESIGNER',
  code: '디자인',
};

const marketer: JobGroup = {
  name: 'MARKETER',
  code: '마케팅',
};

const etc: JobGroup = {
  name: 'ETC',
  code: '그 외 직군',
};

export const allJobGroupList = ['개발', '디자인', '마케팅', '그 외 직군'];

export const allJobGroupMap: JobGroup[] = [developer, designer, marketer, etc];

export const jobGroupMap = new Map<string, JobGroup>();

allJobGroupMap.forEach((jobGroup) => {
  jobGroupMap.set(jobGroup.code, jobGroup);
  jobGroupMap.set(jobGroup.name, jobGroup);
});
