import chai, { expect } from 'chai';

import PusherFactoryMock from '../src/pusher-factory-mock'

describe('PusherFactoryMock', () => {
  let pusherFactoryMock

  beforeEach(() => {
    const pusherKey = '19ir1pkcj13'
    pusherFactoryMock = new PusherFactoryMock(pusherKey)
  })

  it('initializes pusherKey', () => {
    expect(pusherFactoryMock.pusherKey).to.equal('19ir1pkcj13')
  })
})
