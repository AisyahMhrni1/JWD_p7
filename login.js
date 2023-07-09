const correctemail = "jwd@gmail.com";
const correctpassword = "1234";

const messageContainer = document.getElementById("message-container");
function ceklogin() {
  const useremail = document.getElementById("femail").value;
  const userpassword = document.getElementById("fpassword").value;

  if (useremail != correctemail || userpassword != correctpassword) {
    messageContainer.innerHTML =
      "<p class='error-message'>Login Gagal, Email atau Password salah !</p>";
  } else {
    messageContainer.innerHTML =
      "<p class='success-message'>Login Berhasil....</p>";
  }
}
