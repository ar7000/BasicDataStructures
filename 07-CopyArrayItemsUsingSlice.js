function forecast(arr) {

    const niceWeather = arr.slice(2, 4);
    return niceWeather;
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));