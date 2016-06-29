import NotFound from './';
import { shallow } from 'enzyme';

describe('About component', () => {
  const element = shallow(<NotFound />);

  it('render', () => {
    expect(element.find('.notfound')).to.exist;
  });
});
