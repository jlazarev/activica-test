// price slider
const sliderPrice = document.getElementById('range-slider-price');

if (sliderPrice) {
  noUiSlider.create(sliderPrice, {
    start: 350000,
    connect: 'lower',
    step: 10000,
    range: {
      min: 350000,
      max: 3000000,
    },
  });

  const inputPrice = document.getElementById('input-price');

  sliderPrice.noUiSlider.on('update', function (values, handle) {
    inputPrice.value = Math.round(values);
  });

  inputPrice.addEventListener('change', () => {
    sliderPrice.noUiSlider.set(inputPrice.value);
  });
}

// month slider
const sliderMonth = document.getElementById('range-slider-month');

if (sliderMonth) {
  noUiSlider.create(sliderMonth, {
    start: 1,
    connect: 'lower',
    step: 1,
    range: {
      min: 1,
      max: 36,
    },
  });

  const inputMonth = document.getElementById('input-month');

  sliderMonth.noUiSlider.on('update', function (values, handle) {
    inputMonth.value = Math.round(values);
  });

  inputMonth.addEventListener('change', () => {
    sliderMonth.noUiSlider.set(inputMonth.value);
  });
}

// payment slider
const sliderPayment = document.getElementById('range-slider-payment');

if (sliderPayment) {
  noUiSlider.create(sliderPayment, {
    start: 50000,
    connect: 'lower',
    step: 10000,
    range: {
      min: 50000,
      max: 200000,
    },
  });

  const inputPayment = document.getElementById('input-payment');

  sliderPayment.noUiSlider.on('update', function (values, handle) {
    inputPayment.value = Math.round(values);
  });

  inputPayment.addEventListener('change', () => {
    sliderPayment.noUiSlider.set(inputPayment.value);
  });
}
