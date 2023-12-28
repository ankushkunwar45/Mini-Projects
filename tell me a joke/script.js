const jokeList = [
    `This line doesn't actually do anything, but the code stops working when I delete it.`,
    `Oysters hate to give away their pearls because they are shellfish.`,
    `I didn't vaccinate my 10 kids and the one that survived is fine!`,
    `I have a joke about Stack Overflow, but you would say it's a duplicate.`,
    `I'd tell you a joke about NAT but I would have to translate.`,
    `I've got a really good UDP joke to tell you but I don’t know if you'll get it.`,
    `Two SQL tables sit at the bar. A query approaches and asks "Can I join you?"`,
    `The generation of random numbers is too important to be left to chance.`,
    `If Bill Gates had a dime for every time Windows crashed ... Oh wait, he does.`,
    `Schrödinger's cat walks into a bar and doesn't.`,
    `I just got my doctor's test results and I'm really upset about it. Turns out, I'm not gonna be a doctor.`  
  ];
  
  // main logic
  const joke = document.getElementById('joke');
  const button = document.getElementsByTagName('button')[0];
  
  const randomJoke = () => {
    const randomIndex = Math.floor(Math.random() * (jokeList.length - 1));
    const randomJoke = jokeList[randomIndex];
    joke.innerHTML = randomJoke;
  };
  