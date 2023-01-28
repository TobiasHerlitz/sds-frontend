import { Container, TopicCard } from '@components';

import { ReactComponent as Factory } from '@images/factory.svg';
import { ReactComponent as Waiter } from '@images/waiter.svg';
import { ReactComponent as Conveyor } from '@images/conveyor.svg';
import { ReactComponent as Tree } from '@images/tree.svg';

import * as S from './Topics.style';

export const Topics = () => {
  return (
    <Container>
      <S.Grid>
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
      </S.Grid>
    </Container>
  );
};
