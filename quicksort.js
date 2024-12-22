function quickSort(array) {
    // Basis rekursi: Jika array hanya memiliki 1 elemen atau kosong, langsung kembalikan array tersebut
    if (array.length <= 1) {
        return array;
    }

    // Pivot adalah elemen yang digunakan untuk membagi array, Pilih pivot contohnya elemen tengah
    const pivot = array[Math.floor(array.length / 2)];
    
    // Membagi array menjadi tiga bagian, lebih kecil(less), sama(equal), dan lebih besar(greater) dari pivot
    const less = array.filter(item => item < pivot);
    const equal = array.filter(item => item === pivot);
    const greater = array.filter(item => item > pivot);

    // Rekursifkan quicksort di bagian lebih kecil(less) dan lebih besar(greater), lalu gabungkan hasilnya
    return [...quickSort(less), ...equal, ...quickSort(greater)];
}

// Contoh penggunaan quicksort
const numbers = [3, 6, 8, 10, 1, 2, 1];
const sortedNumbers = quickSort(numbers);

console.log(sortedNumbers); // Output 1, 1, 2, 3, 6, 8, 10
