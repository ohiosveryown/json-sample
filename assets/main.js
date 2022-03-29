fetch("../data/sample.json")
  .then((res) => res.json())
  .then((data) => {
    const button = document.querySelector("button")
    const answer = document.querySelector(".answer")

    button.addEventListener("click", () => {
      const fruits = data.fruits
      const fruit = fruits[~~(Math.random() * fruits.length)]
      answer.innerText = fruit.name
    })
  })
