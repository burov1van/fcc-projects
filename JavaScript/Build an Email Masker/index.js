const email = "ivan@mail.ru";

const maskEmail = (email) => {
  const mailName = email.split("@")[0];
  let firstLetterEmail = mailName[0];
  let laslLetterEmail = mailName[mailName.length - 1];
  let middleLettersEmail = mailName.slice(1, mailName.length - 1);
  let stringStarsLenght = middleLettersEmail.length;
  let middlePart = "*".repeat(stringStarsLenght);
  const mailDomen = email.split("@")[1];
  if (mailName.length < 2) {
    return email;
  } else {
    return firstLetterEmail + middlePart + laslLetterEmail + "@" + mailDomen;
  }
};
console.log(maskEmail(email));
