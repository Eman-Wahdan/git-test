const content = [
  `"You miss 100% of the shots you don't take." 
  --Wayne Gretzy`,
  `"Do not take life too seriously. You will not get out alive."
  --Elbert Hubbard`,
  `"It's not what happens to you, but how you react to it that matters."
  --Epictetus`,
  `"The best revenge is massive success."
  --Frank Sinatra`,
  `"Resentment is like drinking poison and waiting for your enemies to die."
  --Nelson Mandela`,
];
function getRandomItem() {
  const randomIndex = Math.floor(Math.random() * content.length);
  return content[randomIndex];
}
var btn = document.querySelector("button");
var ele = document.getElementById("demo");
btn.addEventListener("click", function () {
  const randomItem = getRandomItem();
  ele.textContent = randomItem;
});

