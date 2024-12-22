// Mencari nilai maksimum untuk menentukan jumlah digit,
// kebetulan di kondisi sekarang mempunyai nilai 802 maka kita akan memproses digit dari satuan, puluhan, hingga ratusan.
function getMax(arr) { 
    return Math.max(...arr);
}

function countingSort(arr, place) {
    const n = arr.length; //Panjang array (n).
    const output = new Array(n).fill(0); // Array sementara output untuk menyimpan hasil pengurutan.
    const count = new Array(10).fill(0); // Untuk mencatat frekuensi digit.

    // Hitung frekuensi setiap digit pada posisi tertentu
    for (let i = 0; i < n; i++) {
        const digit = Math.floor(arr[i] / place) % 10;
        count[digit]++;
    }

    // Ubah count[i] sehingga menunjukkan posisi sebenarnya di output[]
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Bangun array output berdasarkan digit
    for (let i = n - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / place) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    // Salin array output ke array asli
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

// Fungsi utama radixSort memanggil fungsi countingSort untuk setiap digit.
function radixSort(arr) {
    const max = getMax(arr); // Cari angka maksimum dalam array

    // Lakukan pengurutan berdasarkan setiap digit
    for (let place = 1; Math.floor(max / place) > 0; place *= 10) {
        countingSort(arr, place);
    }
}

// Contoh penggunaan radixsort
const numbers = [170, 45, 75, 90, 802, 24, 2, 66];
radixSort(numbers);
console.log(numbers); // Output 2, 24, 45, 66, 75, 90, 170, 802
