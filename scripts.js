// Cotação de moedas do dia
const USD = 6.13
const EUR = 6.36
const GBP = 7.65
const CNY = 0.84
const KRW = 0.0042
const JPY = 0.039
const KWD = 19.87
const JOD = 8.64
const AUD = 3.84
// console.log("Ai chavinho!")

// Obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")

})
// Capturando o evento do formulário
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break;
  
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break;

    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break;

    case "CNY":
      convertCurrency(amount.value, CNY, "¥")
      break;
    case "KRW":
      convertCurrency(amount.value, KRW, "₩")
      break;
    case "JPY":
      convertCurrency(amount.value, JPY, "¥")
      break;
    case "KWD":
      convertCurrency(amount.value, KWD, ".د.ك")
      break;
    case "JOD":
      convertCurrency(amount.value, JOD, ".د.أ")
      break;
    case "AUD":
      convertCurrency(amount.value, AUD, "A$")
  }
}

// Função para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    // Exibindo a cotação da moeda selecionada
    description.textContent = ` ${symbol} 1 = ${formatCurrencyBRL(price)}`
 
    let total = amount * price
    total = formatCurrencyBRL(total).replace("R$", "")

    // Exibe o resultado total
    result.textContent = `${total} Reais`

    // Aplica a classe que exibe o footer com o resultado.
    footer.classList.add("show-result")
  } catch (error) {  
    // Remove a classe do footer
    footer.classList.remove("show-result")
    console.log(error)
    alert("Ai minha bariga!")
  }
}
// Formata a moeda em Real
function formatCurrencyBRL(value){
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}