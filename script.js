let passwordLength = document.getElementById("lenght-code");
let password = document.getElementById("code-unik");
let saveButton = document.getElementById("button-save");

const generatePassword = (len) => {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";
  const pes = '-_'
  // const symbol = "!@#$%^&*()_+=-{}[]';:/?.,<>~`";

  const data = lowerAlphabet + upperAlphabet + numeric + pes;
  // const data = lowerAlphabet + upperAlphabet + numeric + symbol;
  let generator = '';
  for (let index = 0; index < len; index++) {
    generator += data[~~(Math.random() * data.length)];
  }
  return generator;
}

const getPassword = () => {
  if(passwordLength.value == '') {
    alert('Panjang kode unik harus diisi');
    return;
  }
  const newPassword = generatePassword(passwordLength.value);
  password.value = newPassword;
}

const Copy = () => {
  if(password.value == '') {
    alert('kode unik masih kosong')
    return;
  }
  password.select();
  password.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(password.value);
  alert("Salin Berhasil: " + password.value);
}