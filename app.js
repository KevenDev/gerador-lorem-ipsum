const texto = [`Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Quem num gosta di mim que vai caçá sua turmis!Quem manda na minha terra sou euzis!Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.` ,

`Cevadis im ampola pa arma uma pindureta.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Aenean aliquam molestie leo, vitae iaculis nisl.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!` ,
  
`Interagi no mé, cursus quis, vehicula ac nisi.In elementis mé pra quem é amistosis quis leo.Paisis, filhis, espiritis santis.Quem manda na minha terra sou euzis!` ,
  
`Delegadis gente finis, bibendum egestas augue arcu ut est.Viva Forevis aptent taciti sociosqu ad litora torquent.Diuretics paradis num copo é motivis de denguis.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.` ,
  
`Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.Viva Forevis aptent taciti sociosqu ad litora torquent.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!` ,
  
`Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Aenean aliquam molestie leo, vitae iaculis nisl.`,
  
`Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.Mé faiz elementum girarzis, nisi eros vermeio.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.`,
  
`Quem num gosta di mim que vai caçá sua turmis!Quem num gosta di mé, boa gentis num é.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Quem manda na minha terra sou euzis!`,
  
`Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.`,

`Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis, nisi eros vermeio.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Atirei o pau no gatis, per gatis num morreus.Manduma pindureta quium dia nois paga.`,

`Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Manduma pindureta quium dia nois paga.Diuretics paradis num copo é motivis de denguis.Quem num gosta di mim que vai caçá sua turmis!`,

`Casamentiss faiz malandris se pirulitá.Si num tem leite então bota uma pinga aí cumpadi!Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.`,

`Interagi no mé, cursus quis, vehicula ac nisi.Cevadis im ampola pa arma uma pindureta.Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!`, ]

const form = document.querySelector(".form-control")
const paragraphs = document.getElementById("paragraphs")
const results = document.querySelector(".lorem-text")

form.addEventListener('submit', function (x) {
  x.preventDefault();

  const value = parseInt(paragraphs.value)
  const random = Math.floor(Math.random() * texto.length);
  if ( value < 0 || value > 13) {
    results.innerHTML = `<p class="results">${texto[random]} </p>`;
  }
  
  else{
  let textparagraphs = texto.slice(0, value);
  textparagraphs = textparagraphs.map(function (item) {
    return `<p class="results">${item}</p>`;
  })
  .join('');
    results.innerHTML = textparagraphs;
  }
});



  