import React from 'react';
import Pagination from './Pagination';
import { shallow } from 'enzyme';

describe('<Pagination />', () => {

    const items = [
            {
              name: 'Theodore Roosevelt',
              starred: true,
              sex: 'male', 
              id: 1
            },
            {
              name: 'Abraham Lincoln',
              starred: false,
              sex: 'male', 
              id: 2
            },
            {
              name: 'Abraham Lincoln',
              starred: false,
              sex: 'male', 
              id: 2
            }];
      const itemsUpd = [
              {
                name: 'Theodore Roosevelt',
                starred: true,
                sex: 'male', 
                id: 1
              },
              {
                name: 'Abraham Lincoln',
                starred: false,
                sex: 'male', 
                id: 2
              }];
    const myMock = jest.fn();
    it('should test whether <Pagination /> is rendered when there are more than 2 items', () => {
       const component = shallow(<Pagination items={items} onChangePage={myMock}/>);
       expect(component.exists('.pagination')).toBeTruthy();
    });

    it('should test whether <Pagination /> is rendered when there are less than 2 items', () => {
       const component = shallow(<Pagination items={itemsUpd} onChangePage={myMock}/>);
       expect(component.exists('.pagination')).toBeFalsy();
    });

    it('should test whether <Pagination /> prev, next and last works', () => {
      const component = shallow(<Pagination items={items} onChangePage={myMock}/>);
      expect(component.find('#nextPage')).toHaveLength(1);
      component.find('#nextPage').simulate('click');
      expect(component.state().pager.currentPage).toEqual(2);
      component.find('#prevPage').simulate('click');
      expect(component.state().pager.currentPage).toEqual(1);
      component.find('#lastPage').simulate('click');
      expect(component.state().pager.currentPage).toEqual(2);
   });
    
  })