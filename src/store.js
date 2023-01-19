const store = {
    _state: {
        cats_card_page: {
            title: 'Ты сегодня покормил кота?',
            cards: [
                {id: 'wefv', pretitle: 'Сказочное заморское яство', title: 'Нямушка', subtitle: 'с фуа-гра', portion: ['10', 'мышь в подарок'], weight: '0,5', desc: 'Печень утки разварная с артишоками.', count: 3, error_message:'Печалька, с фуа-гра закончился.'},
                {id: 'fdvr', pretitle: 'Сказочное заморское яство', title: 'Нямушка', subtitle: 'с рыбой', portion: ['40', '2 мыши в подарок'], weight: '2', desc: 'Головы щучьи с чесноком да свежайшая сёмгушка.', count: 0, error_message:'Печалька, с рыбой закончился.'},
                {id: 'qecs', pretitle: 'Сказочное заморское яство', title: 'Нямушка', subtitle: 'с курой', portion: ['100', '5 мышей в подарок', 'заказчик доволен'], weight: '5', desc: 'Филе из цыплят с трюфелями в бульоне.', count: 3, error_message:'Печалька, с курой закончился.'},
            ],
        }
    },
    getState(){
        return this._state
    }
}

export default store