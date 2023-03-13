// e o endereço completo é retornado ao clicar em buscar
let cepInput = document.querySelector('input#cep').value
const cepField = document.getElementById('cep');

const cepText = document.querySelector('.cep-text');
const logradouroText = document.querySelector('.logradouro-text')
const localidadeText = document.querySelector('.localidade-text')
const ufText = document.querySelector('.uf-text')
const dddText = document.querySelector('.ddd-text')

const findCep = document.getElementById('btn');
findCep.addEventListener('click', btnSent);


function cepChange(text)
{
    cepInput = text;
    console.log(cepInput)
}

function btnSent(event) 
{
    event.preventDefault();
    fetch(`https://viacep.com.br/ws/${cepInput}/json`)
    .then(r => 
        {
            r.json().then(cep => 
                {
                    cepText.innerHTML = `CEP: ${cep.cep}`
                    logradouroText.innerHTML = `LOGRADOURO: ${cep.logradouro}`
                    localidadeText.innerHTML = `CIDADE: ${cep.localidade}`
                    ufText.innerHTML = `UF: ${cep.uf}`
                    dddText.innerHTML = `DDD: (${cep.ddd})`
                    findCep.innerText = 'FIND CEP'
                })
        },reject => 
        {
            findCep.innerText = 'ERROR'
            cepText.innerHTML = `CEP:`
            logradouroText.innerHTML = `LOGRADOURO:`
            localidadeText.innerHTML = `CIDADE: `
            ufText.innerHTML = `UF: `
            dddText.innerHTML = `DDD:`
        })
} 