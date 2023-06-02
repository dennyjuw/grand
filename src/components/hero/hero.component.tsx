'use client';

import React from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';

const Hero: React.FC = (props: any) => {
  const segment = useSelectedLayoutSegment();

  return <>Active segment: {segment}</>;
};

export default Hero;
