import React, { ReactElement, HTMLAttributes } from "react";

interface ComponentProps extends HTMLAttributes<HTMLElement> {
  children: ReactElement<any>;
}

const SectionWrapper: React.FC<ComponentProps> = ({ children, ...props }) => {
  return (
    <section className='max-w-[1463px] relative z-0' {...props}>
      {children}
    </section>
  );
};

export default SectionWrapper;
