import { InvoicesReducer, initialState } from './invoices.reducer';

describe('Invoices Reducers', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = InvoicesReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
