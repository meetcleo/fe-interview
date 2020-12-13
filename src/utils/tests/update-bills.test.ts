import { Bill } from '../../types/bill-types';
import { MOCK_BILLS } from '../../__mocks__/mock-factory';
import { updateBillStore } from '../update-bills';

describe('updateBillStore', () => {
  it('should update the value of the item', () => {
    const items: Bill[] = [MOCK_BILLS[0], MOCK_BILLS[1]];
    const updatedItem: Bill = {
      ...MOCK_BILLS[0],
      isBill: !MOCK_BILLS[0].isBill,
    };
    const result = updateBillStore(items, updatedItem);
    const expected = [
      { ...MOCK_BILLS[0], isBill: !MOCK_BILLS[0].isBill },
      MOCK_BILLS[1],
    ];

    expect(result).toEqual(expected);
  });
});
