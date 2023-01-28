import { Container, TopicCard } from '/src/components';

import { ReactComponent as Factory } from '/src/assets/images/factory.svg';
import { ReactComponent as Waiter } from '/src/assets/images/waiter.svg';
import { ReactComponent as Conveyor } from '/src/assets/images/conveyor.svg';
import { ReactComponent as Tree } from '/src/assets/images/tree.svg';

import styled from './Topics.style';

export const Topics = () => {
  return (
    <Container>
      <styled.grid>
        <TopicCard
          heading="classes"
          quote="Yo dawg. I heard you like objects so we put an object in your object so you can object-orient while you object-orient"
          Icon={Factory}
        />
        <TopicCard
          heading="Front-end"
          quote="Glitter is my makeup of choice"
          Icon={Waiter}
        />
        <TopicCard
          heading="Pipelines"
          quote="Pipeline goes brrrrrr"
          Icon={Conveyor}
        />
        <TopicCard
          heading="Git"
          quote="Git gud scrub"
          Icon={Tree}
        />
      </styled.grid>
    </Container>
  );
};
