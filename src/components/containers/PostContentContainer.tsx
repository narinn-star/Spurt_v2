'use client';

import { ReactNode } from 'react';

interface PostContentContainerProps {
  children: ReactNode;
}

const PostContentContainer = (props: PostContentContainerProps) => {
  return (
    <div
      className="flex flex-col bg-white text-body3 text-gray-600 
                    placeholder:text-body3 placehorder:text-gray-300 
                    rounded-2xl border border-gray-300 p-[30px]
                    mt-[12px] mb-[30px]"
    >
      {props.children}
    </div>
  );
};

export default PostContentContainer;
