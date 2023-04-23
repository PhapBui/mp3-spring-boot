import * as React from 'react';
import SectionHeader from '../section-header/SectionHeader';
import Section from '@/common/components/section/Section';

interface ISectionFiveColumnsProps {}

const SectionFiveColumns: React.FunctionComponent<ISectionFiveColumnsProps> = (props) => {
  return (
    <Section>
      <SectionHeader />
      <div>Con co day</div>
    </Section>
  );
};

export default SectionFiveColumns;
