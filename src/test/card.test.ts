import {Card} from "../types/card";

const card = new Card(113, 123, 'MyCard');

describe('Card creating is correct', () => {

    test(`New card name is MyCard`, () => {
        expect(card.name).toEqual('MyCard');
    });

    test('New card column ID equals 113', () => {
        expect(card.columnId).toEqual(113);
    });

    test('New card ID equals 123', () => {
        expect(card.id).toEqual(123);
    })
});

describe('Card functions works correctly', () => {
    test('Card column ID was 113 now is 10', () => {
        expect(card.columnId).toEqual(113);
        expect(card.setColumnId(10).columnId).toEqual(10);
    });

    test('Card ID was 123 now is 25', () => {
        expect(card.id).toEqual(123);
        expect(card.setId(25).id).toEqual(25);
    })
});

describe('Card list changes correctly', () => {
    // @ts-ignore
    const cardList = [[0,0,"mycard1"],[0,1,"mycard2"],[1,0,"mycard3"],[1,1,"mycard4"]].map(([a, b, c]) => new Card(a, b, c));

    test('Card list IDs will increment to 1', () => {
        const newCardList = cardList.map(card => card.setId(card.id + 1));
        newCardList.forEach((card, idx) => {
            expect(card.id - cardList[idx].id).toEqual(1)
        });
    });

    test('Card list column IDs will increment to 1', () => {
        const newCardList = cardList.map(card => card.setColumnId(card.columnId + 1));
        newCardList.forEach((card, idx) => {
            expect(card.columnId - cardList[idx].columnId).toEqual(1)
        });
    })
})