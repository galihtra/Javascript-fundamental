const averageExams = (valuesExam) => {
    const numberValidation = valuesExam.every(exam => typeof exam === 'number');
    if (!numberValidation) throw Error("Please input number")

    const sumValues = valuesExam.reduce((accumulator,currentValues) => accumulator + currentValues,0);
    return sumValues / valuesExam.length;

}

const isStudentPassExam = (valuesExam,name) => {
    const minValues = 75;
    const average = averageExams(valuesExam);

    if (average > minValues) {
        console.log(`${name} pass the exam`);
        return true;
    } else {
        console.log(`${name} fail the exams`);
        return false
    }
}

module.exports = {averageExams, isStudentPassExam};