// buatkan fungsi untuk menghitung konversi suhu celcius ke fahrenheit
// celcius ke reamur
// celcius ke kelvin
// output hasil konversi dengan format satuan yang benar

// celcius ke fahrenheit

function celciToFahren(celci) {
  let ceToF = (9 / 5) * celci + 32;
  return ceToF;
}

// celcius ke reamur

const celciToReamur = function (celci) {
  let ceToR = (4 / 5) * celci;
  return ceToR;
};

// celcius ke kelvin

const celciToKelvin = (celci) => {
  let ceToK = celci + 273;
  return ceToK;
};

// allOutput

// impure function, karna makai fungsi dari luar

const allOutput = (celci) => {
  const cF = celciToFahren(celci);
  const cR = celciToReamur(celci);
  const cK = celciToKelvin(celci);

  console.log(`Celcius ke Fahrenheit = ${cF}°F`);
  console.log(`Celcius ke Reamur = ${cR}°R`);
  console.log(`Celcius ke Kelvin = ${cK}°K`);
};

allOutput(20);

// kalau fungsi dipanggil diluar kita isi argumen,
// kalau makai variable, sesuaikan namanya lalu diisi di parameter fungsi

// pure function

const allOutput2 = (celci, satuanFah, satuanReam, satuanKel) => {
  const cF = satuanFah(celci);
  const cR = satuanReam(celci);
  const cK = satuanKel(celci);

  console.log(`Celcius ke Fahrenheit = ${cF}°F`);
  console.log(`Celcius ke Reamur = ${cR}°R`);
  console.log(`Celcius ke Kelvin = ${cK}°K`);
};

// Isi argumen pertama dari parameter, parameter kedua
// cb ini fungsi yang dipanggil kembali
allOutput2(20, celciToFahren, celciToReamur, celciToKelvin);
