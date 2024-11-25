TUGAS 9 - PRAKTIKUM PEMROGRAMAN MOBILE
======================================

Nama    : Luthfi Emillulfata

NIM     : H1D022017

Shift Lama  : D

Shift Baru  : C

==========================================

**SCREENSHOT TAMPILAN**

1. Tampilan Login

   ![image](https://github.com/user-attachments/assets/e4ba1094-ae85-4b6a-a509-49a4204b60ad)

   Tampilan diatas merupakan tampilan awal pada aplikasi, dimana user dapat melakukan login menggunakan akun google

2. Tampilan Home

   ![image](https://github.com/user-attachments/assets/c8662d99-a185-486d-9479-8745a98e3eda)

   Tampilan home diatas merupakan tampilan yang dapat dilihat user setelah melakukan login, pada tampilan tersebut terdapat heading atau tulisan "Welcome Back!", lalu juga sudah ditambahi oleh saya sendiri untuk icon tugas/tasks dan calendar sehingga untuk tampilannya itu tidak terlalu polos.

3. Tampilan Profile

   ![image](https://github.com/user-attachments/assets/64f80cea-5b90-4b44-8cc0-bf8f0c161d91)

   Tampilan diatas merupakan tampilan profile, dimana pada halaman tersebut menampilkan informasi Nama dan Email dari user tersebut. Dan di pojok kanan atas itu ada button "Logout" yang digunakan agar user dapat keluar/logout dari aplikasinya, sehingga apabila user menekan button "Logout" maka akan keluar aplikasi secara langsung dan menuju ke halaman login lagi.

4. Navbar

   ![image](https://github.com/user-attachments/assets/ebb86a13-7396-40ad-a013-e8b17041a7f5)

   Gambar diatas merupakan navbar yang digunakan oleh user untuk berpindah-pindah halaman, pada navbar diatas terdapat 2 yaitu navbar home dan profile. Ketika user menekan home, maka akan diarahkan ke halaman Home dan ketika user menekan profile, maka akan diarahkan ke halaman Profile

====================================

**PENJELASAN**

1. Pertama-tama kita melakukan pembuatan projek firebase nya sebagai backend, agar nantinya projek ionic yang dibuat itu dapat tersambung satu sama lainnya. Pembuatan projek firebase tersebut bertujuan agar kita mendapatkan firebaseConfig dimana didalamnya terdapat ApiKey, authDomain, Dll. Apabila sudah mendapatkan firebaseConfignya lalu kita copas ke dalam folder utils, dimana folder utils sendiri itu digunakan untuk menyambungkan antara projek ionic nya dengan firebase yang telah dibuat. Sehingga untuk tampilan code nya itu akan seperti pada dibawah

   ![image](https://github.com/user-attachments/assets/618ea2c6-3015-465f-b2d9-a44198a9f461)

   Dapat dilihat dari kode diatas bahwa, firebaseConfig yang telah dicopas tadi itu bertujuan agar layanan otentikasi Firebase (getAuth) diaktifkan. Selain itu, penyedia otentikasi Google (GoogleAuthProvider) disiapkan untuk memungkinkan user bisa login menggunakan akun Google mereka.

2. Selanjutnya kita membuat Fungsi Sign In dan Logout. Fungsi Sign In memungkinkan user masuk ke aplikasi dengan akun Google, memastikan mereka terautentikasi untuk mengakses fitur tertentu. Sementara itu, fungsi Logout digunakan untuk mengakhiri sesi user dan mengembalikan mereka ke halaman login.

   ![image](https://github.com/user-attachments/assets/13891926-c911-4525-8ed6-78f7f7a7bc02)

   ![image](https://github.com/user-attachments/assets/edcb2d0e-0b8d-4f3b-b752-dda352bb7d2b)

   Berdasarkan gambar diatas, dapat kita ketahui bahwa agar user dapat berhasil melakukan login menggunakan akun google nya itu kita harus memasukan Client ID nya terlebih dahulu. Client ID tersebut didapat dengan membuka webiste console dari Google yaitu dibagian api (link website nya: https://console.cloud.google.com/apis/dashboard), setelah menemukan Clien ID nya lalu kita copas kan ke dalam kode tersebut. Apabila user berhasil login, maka diarahkan ke halaman Home; dan apabila gagal login, maka akan menampilkan pesan "Login gagal!" - "Terjadi kesalahan saat login dengan Google. Coba lagi."

3. Setelah itu kita membuat halaman LoginPage, Navbar, HomePage, dan ProfilePage dengan kode sebagai berikut

   **A) LoginPage**

   ![image](https://github.com/user-attachments/assets/c177f454-4c62-4f34-bbe3-bdc6a9cc7692)

   Halaman ini memiliki sebuah tombol untuk login menggunakan akun Google. Ketika tombol Sign In with Google diklik, fungsi login dipanggil untuk memicu proses autentikasi dari getAuth yang telah di copas/tambahkan tadi.

   **B) Navbar**

   ![image](https://github.com/user-attachments/assets/fe195167-0346-44c3-9d87-a008df1e51c7)

   Pada kode diatas merupakan pembuatan dari navbar untuk Home dan Profile, navbar tersebut dibuat dengan menggunakan ion icons sehingga dapat menampilkan icon home dan profile yang dapat diklik dan mengarahkan ke halaman masing-masing.

   **C) HomePage**

   ![image](https://github.com/user-attachments/assets/8ac4dd59-7981-4064-af24-af3826cbcc15)

   Gambar diatas merupakan kode untuk Tampilan Home, dimana di dalam nya itu menambahkan komponen TabsMenu yang bertujuan untuk memanggil/menampilkan Navbar tadi.

   **D) ProfilePage**

   ![image](https://github.com/user-attachments/assets/45657f3c-4ce0-4990-85ee-824ed5455c1c)

   ![image](https://github.com/user-attachments/assets/5859b8be-beb9-4e4b-8a81-79f086ba8879)

   Dari kode diatas bahwa ProfilePage menampilkan informasi user seperti foto profil, nama, dan email. Lalu di header menyertakan tombol logout untuk mengakhiri sesi user dan keluar dari aplikasi.
