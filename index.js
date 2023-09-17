document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("name");
    const passwordInput = document.getElementById("password");
    const generateButton = document.getElementById("generate");
  
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*-_=+|;:,.?";
  
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + symbols;
  
    function generateRandomPassword(length) {
      let password = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters.charAt(randomIndex);
      }
      return password;
    }
  
    generateButton.addEventListener("click", function() {
      const generatedPassword = generateRandomPassword(5); // You can change the length
      const userName = nameInput.value.trim() || "User";
      passwordInput.value = `${userName}${generatedPassword}`;
    });
  });
  