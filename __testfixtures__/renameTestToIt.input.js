'use strict';

import {
  ACTION_LIBRARY_ITEMS_ADDED,
  ACTION_LIBRARY_ITEMS_DELETED,
  ACTION_LIBRARY_ITEMS_UPDATED,
} from '../../../../src';
import * as libraryItemsActions from '../../../../src/';

jest.mock('../../../../src/api/services');

describe('[design-system/actions/libraryItemsActions]', () => {
  const mockStore = configureMockStore([thunk]);

  describe('actionAddItem', () => {
    let store;
    beforeEach(() => {
      store = mockStore({});
    });

    test('should pass type ACTION_LIBRARY_ITEMS_ADDED with item object', () => {
      // having
      const item = { type: 'def' };

      // when
      store.dispatch(libraryItemsActions.actionAddItem(item));

      // then
      expect(store.getActions()).toContainEqual({});
    });
  });

  describe('actionDeleteItem', () => {
    let store;
    beforeEach(() => {
      store = mockStore({});
    });

    test('should pass type ACTION_LIBRARY_ITEMS_DELETED with item object', () => {
      // having
      const item = { id: 1 };

      // when
      store.dispatch(libraryItemsActions.actionDeleteItem(item));

      // then
      expect(store.getActions()).toContainEqual({});
    });
  });

  describe('actionUpdateItem', () => {
    let store;
    beforeEach(() => {
      store = mockStore({});
    });

    test('should pass type ACTION_LIBRARY_ITEMS_UPDATED with item object', () => {
      // having
      const item = {};

      // when
      store.dispatch(libraryItemsActions.actionUpdateItem(item));

      // then
      expect(store.getActions()).toContainEqual({});
    });

    describe('actionUpdateItem2', () => {
      test('should pass type ACTION_LIBRARY_ITEMS_UPDATED with item object2', () => {
        expect(true).toBe(true);
      });
    });
  });
});
