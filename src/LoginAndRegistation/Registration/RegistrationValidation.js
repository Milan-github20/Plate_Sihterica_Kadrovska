const validation = (values) => {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const ime_pattern = /^[a-zA-Z]+\.[a-zA-Z]+$/;
  const password_pattern = /^.{4,}$/;

  if (values.ime === "") {
    error.ime = "Polje ime ne smije biti prazno";
  } else if (!ime_pattern.test(values.ime)) {
    error.ime = "Ime mora da bude u formatu (ime.ime)";
  } else {
    error.ime = "";
  }

  if (values.email === "") {
    error.email = "Polje email ne smije biti prazno";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email nije ispravno napisan";
  } else {
    error.email = "";
  }

  if (values.sifra === "") {
    error.sifra = "Polje šifra ne smije biti prazno";
  } else if (!password_pattern.test(values.sifra)) {
    error.sifra = "Šifra mora da sadrži više od 3 karaktera";
  } else {
    error.sifra = "";
  }
  return error;
};

export default validation;
