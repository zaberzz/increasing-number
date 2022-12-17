const numbers = [...document.querySelectorAll(".number")];
const updateCount = (el) => {
  const value = parseInt(el.data.value);
  const increment = Math.ceil(value / 1000);

  let initialValue = 0;
};

numbers.forEach((item) => updateCount(item));
