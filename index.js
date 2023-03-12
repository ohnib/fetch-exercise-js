// e o endereço completo é retornado ao clicar em buscar
let cepInput = document.querySelector('input#cep').value
const cepField = document.getElementById('cep');

const cepText = document.querySelector('.cep-text');
const logradouroText = document.querySelector('.logradouro-text')
const localidadeText = document.querySelector('.localidade-text')
const ufText = document.querySelector('.uf-text')
const dddText = document.querySelector('.ddd-text')

function cepChange(text)
{
    cepInput = text;
    console.log(cepInput)
    fetch(`https://viacep.com.br/ws/${cepInput}/json`)
    .then(r => 
        {
            r.json().then(cep => 
                {
                    cepText.innerHTML = `CEP: ${cep.cep}`
                    logradouroText.innerHTML = `LOGRADOURO: ${cep.logradouro}`
                    localidadeText.innerHTML = `CEP: ${cep.localidade}`
                    ufText.innerHTML = `CEP: ${cep.uf}`
                    dddText.innerHTML = `CEP: (${cep.ddd})`
                })
        })
}

