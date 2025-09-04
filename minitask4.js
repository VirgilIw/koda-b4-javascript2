// buatkan fungsi untuk menghitung konversi suhu celcius ke fahrenheit
// celcius ke reamur
// celcius ke kelvin
// output hasil konversi dengan format satuan yang benar

// celcius ke fahrenheit

function celciToFahren(suhu) {
  let ceToF = (4 / 5) * suhu;
  return ceToF;
}

// celcius ke reamur

const celciToReamur = function (suhu) {
  let ceToR = (4 / 5) * suhu;
  return ceToR;
};

// celcius ke kelvin

const celciToKelvin = (suhu) => {
  let ceToK = (9 / 5) * suhu + 32;
  return ceToK;
};

// allOutput

const allOutput = (suhu) => {
  const cF = celciToFahren(suhu);
  const cR = celciToReamur(suhu);
  const cK = celciToKelvin(suhu);

  console.log(`Celcius ke Fahrenheit = ${cF}°F`);
  console.log(`Celcius ke Reamur = ${cR}°R`);
  console.log(`Celcius ke Kelvin = ${cK}°K`);
};

allOutput(20);

// kalau fungsi diluar kita isi argumen,
// kalau makai variable, sesuaikan namanya lalu diisi di parameter fungsi
