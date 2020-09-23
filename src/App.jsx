import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end JS framework',
  },
  {
    title: 'Why React?',
    content: 'Plenty of job opportunities',
  },
  {
    title: 'Will it change in the future?',
    content: 'Probably to some degree, but that is part of the fun',
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
