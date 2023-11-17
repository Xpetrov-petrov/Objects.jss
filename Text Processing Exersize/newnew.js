// let text = 'Peter: 123 Mark: 456';
// let regexp = /([A-Z][a-z]+):(\d+)/g;

// let firstMatch = regexp.exec(text);
// let secondMatch = regexp.exec(text);

// console.log(firstMatch[0]);

let text = 'Peter: 123 Mark: 456';
let regexp = /([A-Z][a-z]+):(\d+)/g;

let match;
while ((match = regexp.exec(text)) !== null) {
    console.log(match[0]);
}