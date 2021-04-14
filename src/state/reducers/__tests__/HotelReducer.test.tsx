import { HotelsType } from '../../actions/types';
import * as actions from '../../actions/hotels';
import reducer from '../hotelsReducer';

const initialState = {
  loading: false,
  items: [],
  itemsCount: 0,
  total: 0
};

describe('Hotel Reducer Tests', () => {
  it('should return initialState by default', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should be loading true when creating new hotel', () => {
    const actionToAddHotelData = actions.createHotel({
      name: 'aaadadkbkjbbjkbjkbjkjkb---',
      description: 'aaa',
      phone: '38080664479770',
      address: {
        country: 'aaa',
        city: 'aaa',
        state: 'aaa',
        street: 'aaa',
        address1: 'aaa',
        address2: 'aaa',
        zip: 0,
        location: {
          latitude: '0',
          longtitude: '0'
        }
      }
    });

    expect(reducer(initialState, actionToAddHotelData).loading).toBe(true);
  });
});
