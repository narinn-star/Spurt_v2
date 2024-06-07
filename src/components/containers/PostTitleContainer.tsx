'use client';

import { ReactNode } from 'react';

interface PostTitleContainerProps {
  children: ReactNode;
}

const PostTitleContainer = (props: PostTitleContainerProps) => {
  return (
    <div
      className="bg-white text-heading3 text-gray-600 placeholder:text-heading3 placehorder:text-gray-300 
                    rounded-2xl border border-gray-300 px-[24px] flex flex-col"
    >
      {props.children}
    </div>
  );
};

export default PostTitleContainer;
