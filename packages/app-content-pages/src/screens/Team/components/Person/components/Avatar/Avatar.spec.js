import { shallow } from 'enzyme'

import Avatar from './Avatar'

let wrapper

describe('Component > Avatar', function () {
  before(function () {
    wrapper = shallow(<Avatar />)
  })

  it('should render without crashing', function () {
    expect(wrapper).to.be.ok()
  })
})
