import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header.jsx';

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

const options = [
  {
    label: 'The color red',
    value: 'red',
  },
  {
    label: 'The color green',
    value: 'green',
  },
  {
    label: 'A shade of blue',
    value: 'blue',
  },
];

export default () => {
  const [selected, setSelected] = useState(0);
  return (
    <div>
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          label='Select a color'
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
};
