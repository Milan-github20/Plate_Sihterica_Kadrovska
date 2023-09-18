const validation = (email, sifra) => {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^.{4,}$/;

  if (email === "") {
    error.email = "Polje email ne smije biti prazno";
  } else if (!email_pattern.test(email)) {
    error.email = "Email nije ispravno napisan";
  } else {
    error.email = "";
  }

  if (sifra === "") {
    error.sifra = "Polje šifra ne smije biti prazno";
  } else if (!password_pattern.test(sifra)) {
    error.sifra = "Šifra mora da sadrži više od 3 karaktera";
  } else {
    error.sifra = "";
  }
  return error;
};

export default validation;
