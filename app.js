let p = $('#test');
let div = $('.my-class');
let ul = $('ul');


let first = $('#first');
let last = $('#last');
let email = $('td');

let add = $('#customer-table');
add.append('<td>...');
add.append('<td>...');
add.append('<td>...')


console.log(p);
console.log(div);
console.log(ul);

console.log(p.text());
p.text('New Text');

$('input').attr('placeholder','PH Text');

div.prepend('<p>prepended paragraph');
div.append('<p>appended paragrph</p>');
div.before('<p>paragraph that was added before the div');
div.after('<p> paragraph added after the div');

div.empty();
ul.remove();

