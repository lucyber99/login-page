/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */
/** @module Login-Script */
/**
* Membuat variable loginFormElement untuk tampilan form.
* @constant (HTMLElement)
*/

const loginFormElement = document.querySelector('#loginForm');

/**
* Membuat variabel inputEmailElement untuk tampilan input email.
* @constant (HTMLElement)
*/
const inputEmailElement = document.querySelector('#inputEmail');

/**
* Membuat variabel inputPasswordElement untuk tampilan input password.
* @constant (HTMLElement)
*/
const inputPasswordElement = document.querySelector('#inputPassword');


/**
* Membuat variabel ExpectedEmail untuk menyimpan informasi email sebagai pembanding.
* @constant (HTMLElement)
*/
const expectedEmail = 'admin@dicoding.com';

/**
* Membuat variabel ExpectedPassword untuk menyimpan informasi password sebagai pembanding.
* @constant (HTMLElement)
*/
const expectedPassword = 'superpassword';

/* Comment : Menambahkan aksi klik pada button. */
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();

    /**
    * Membuat variable email untuk menyimpan nilai email yang didapatkan saat button ditekan.
    * @constant {string}
    */
    const email = inputEmailElement.value;
    
    /**
    * Membuat variable Password untuk menyimpan nilai email yang didapatkan saat button ditekan.
    * @constant {string}
    */
    const pass = inputPasswordElement.value;

    /* Comment : Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan. */
    // TODO 1 : Mendapatkan input email dan password pengguna dari form.
    if (email === expectedEmail && pass === expectedPassword) {

        /* Comment : Jika sesuai maka program akan berpindah ke halaman home. */
      goToHome();
    } else {

        /* Comment : Namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah. */
      showPopUp();
    }
    /* TODO 2 : Buat Logika perbandingan dengan kondisi:
       Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword, panggil fungsi goToHome().
       Jika tidak, maka panggil fungsi showPopUp().
     */
});
