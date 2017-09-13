const a = { name: 'Khoa' };
const b = { name: 'Khoa' };
const c = a;

a.name = 'X';

console.log(c.name);
