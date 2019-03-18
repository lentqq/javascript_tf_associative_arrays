function schoolGrades(input) {
    let students = new Map();

    for (const string of input) {
        let [name, ...gradesInput] = string.split(' ');
        let grades = gradesInput.map(Number);

        if (students.has(name)) {
            grades = students.get(name).concat(grades);
        }
        students.set(name, grades);
    }
    let avg = grades => grades.reduce((a, b) => a + b) / grades.length;
    [...students.entries()]
        .sort((a, b) => avg(a[1]) - avg(b[1]))
        .forEach(s => console.log(`${s[0]} : ${s[1].join(', ')}`));
}

schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6'])