let bigDiv = document.createElement("div"); 
bigDiv.className = 'bigbox';
document.body.prepend(bigDiv);



let lilBox1 = document.createElement("div"); 
lilBox1.className = 'lilbox1'; 
lilBox1.innerHTML = '<h1>Осёл</h1> <p> Домашний осёл или ишак — одомашненный подвид дикого осла, сыгравший важную историческую роль в развитии хозяйства и культуры человека. Все одомашненные ослы относятся к африканским ослам. </p>';

let btn1 = document.createElement("input"); 
btn1.type = 'button';
btn1.className = 'btn1';
btn1.value = 'hide';
lilBox1.prepend(btn1);





let lilBox2 = document.createElement("div"); 
lilBox2.className = 'lilbox2'; 
lilBox2.innerHTML = '<h1>Кошка</h1> <p>Кошка, или домашняя кошка (лат. Félis silvéstris cátus), — домашнее животное, одно из наиболее популярных (наряду с собакой) "животных-компаньонов". С точки зрения научной систематики,домашняя кошка — млекопитающее семейства кошачьих отряда хищных. Ранее домашнюю кошку нередко рассматривали как отдельный биологический вид.</p>';

let btn2 = document.createElement("input"); 
btn2.type = 'button';
btn2.className = 'btn2';
btn2.value = 'hide';
lilBox2.prepend(btn2);


bigDiv.prepend(lilBox1 , lilBox2);

btn1.onclick = function(e) { 
   e.target.parentNode.remove()
};


btn2.onclick = function(e) { 
   e.target.parentNode.remove()
};
