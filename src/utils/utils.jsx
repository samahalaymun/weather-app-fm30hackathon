export const unitsOptions = [
  {
    label: "Temperature",
    key: "temp",
    options: [
      { label: "Celsius (°C)", value: "celsius" },
      { label: "Fahrenheit (°F)", value: "fahrenheit" },
    ],
  },
  {
    label: "Wind Speed",
    key: "wind",
    options: [
      { label: "km/h", value: "kmh" },
      { label: "mph", value: "mph" },
    ],
  },
  {
    label: "Precipitation",
    key: "precip",
    options: [
      { label: "Millimeters (mm)", value: "mm" },
      { label: "Inches (in)", value: "inch" },
    ],
  },
];

export const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const weatherIcons = {
  0: "/assets/images/icon-sunny.webp",
  1: "/assets/images/icon-partly-cloudy.webp",
  2: "/assets/images/icon-partly-cloudy.webp",
  3: "/assets/images/icon-overcast.webp",
  3: "/assets/images/icon-overcast.webp",
  45: "/assets/images/icon-fog.webp",
  48: "/assets/images/icon-fog.webp",
  51: "/assets/images/icon-drizzle.webp",
  53: "/assets/images/icon-drizzle.webp",
  55: "/assets/images/icon-drizzle.webp",
  61: "/assets/images/icon-rain.webp",
  63: "/assets/images/icon-rain.webp",
  65: "/assets/images/icon-rain.webp",
  71: "/assets/images/icon-snow.webp",
  73: "/assets/images/icon-snow.webp",
  75: "/assets/images/icon-snow.webp",
  80: "/assets/images/icon-rain.webp",
  81: "/assets/images/icon-rain.webp",
  82: "/assets/images/icon-rain.webp",
  95: "/assets/images/icon-storm.webp",
  96: "/assets/images/icon-storm.webp",
  99: "/assets/images/icon-storm.webp",
};

export const deboune = (func, delay) => {
  let timeoutid;
  return function (...args) {
    clearTimeout(timeoutid);
    timeoutid = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
