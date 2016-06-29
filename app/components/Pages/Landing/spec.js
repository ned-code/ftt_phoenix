import Landing from './';
import { shallow } from 'enzyme';

describe('About component', () => {
  const element = shallow(<Landing />);

  it('render', () => {
    expect(element.find('.landing')).to.exist;
  });
});
