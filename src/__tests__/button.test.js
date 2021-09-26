import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../Button';

Enzyme.configure({ adapter: new Adapter() });

describe('Button组件相关', () => {
  it('Button渲染样式正常', () => {
    const wrapper = shallow(<Button />);
    // expect(wrapper).toMatchSnapshot();// 进行快照保存
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
