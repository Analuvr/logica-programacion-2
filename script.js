function convertTemperature() {
    let toFahrenheit;
    let toKelvin;
    let initialTemp = document.getElementById("itemp").value;

    toFahrenheit = (initialTemp * 9/5) + 32;
    toKelvin = (initialTemp * 1) + 273.15;

    const paragraph1 = document.createElement("p");
    const paragraph2 = document.createElement("p"); 
    let fahrenheitInDom = document.createElement("ul");
    const valueFahrenheit = document.createElement("li");
    let kelvinInDom = document.createElement("ul");
    const valueKelvin = document.createElement("li");

    paragraph1.textContent = "Grados Fahrenheit (°C)";
    paragraph2.textContent = "Kelvin (K)";

    document.body.append(paragraph1);
    document.body.append(fahrenheitInDom);
    fahrenheitInDom.append(valueFahrenheit)
    valueFahrenheit.textContent = toFahrenheit.toFixed(2);
    
    document.body.append(paragraph2);
    document.body.append(kelvinInDom);
    kelvinInDom.append(valueKelvin);
    valueKelvin.textContent = toKelvin.toFixed(2);
    
    console.log(`Temperatura inicial (°C): ${initialTemp}`);
    console.log(`Grados Fahrenheit (°F): ${toFahrenheit.toFixed(2)}`);
    console.log(`Kelvin (K): ${toKelvin.toFixed(2)}`)
}