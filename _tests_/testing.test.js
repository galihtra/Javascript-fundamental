const {averageExams} = require('../testing');

describe('grade calculations', () => {
    test('it should return exact average', () => {
        const listValueOfExams = [80, 100, 100, 80];
        expect(averageExams(listValueOfExams)).toEqual(90);
    });

    // Integration testing

    test('it should return exam passed status',() => {
        const listValueOfExams = [80,100,100,80]
        expect(averageExams(listValueOfExams, 'budi')).toEqual(true);
    })

    test('it should return exam failed status',() => {
        const listValueOfExams = [56,74,35,80]
        expect(averageExams(listValueOfExams, 'cahyo')).toEqual(false);
    })

})
