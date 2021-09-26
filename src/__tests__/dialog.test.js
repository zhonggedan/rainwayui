import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dialog from '../Dialog';

Enzyme.configure({ adapter: new Adapter() });

describe('Dialog组件相关', () => {
  it('Dialog渲染样式正常', () => {
    const wrapper = shallow(<Dialog />);
    // expect(wrapper).toMatchSnapshot();// 进行快照保存
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
