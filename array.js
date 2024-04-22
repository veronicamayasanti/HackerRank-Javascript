// Function Description
// "Selesaikan fungsi getSecondLargest di bawah ini.
// getSecondLargest memiliki parameter - parameter berikut:
// int nums[n]: sebuah array berisi bilangan bulat."

// Returns
// int: bilangan terbesar kedua dalam nums

// "Format Input

// Baris pertama berisi sebuah bilangan bulat, n, yang merupakan ukuran dari array nums.
// Baris kedua berisi n bilangan yang dipisahkan oleh spasi yang menggambarkan elemen - elemen dalam nums."

// contoh
// Diberikan array nums = [2, 3, 6, 6, 5], 
// kita dapat melihat bahwa nilai terbesar dalam array tersebut adalah 6 
// dan nilai terbesar kedua adalah 5. Oleh karena itu, kita mengembalikan nilai 5 sebagai jawaban.

function getSecondLargest(nums){
    let firstlargest = -Infinity;
    let secondLargest = -Infinity;

    for(let num of nums){
        if (num > firstlargest){
            secondLargest = firstlargest;
            firstlargest = num;
        }else if ( num > secondLargest && num !== firstlargest){
            secondLargest = num
        }
    }
    return secondLargest
}

const nums = [2,3,6,6,5];
const secondLargest = getSecondLargest(nums);

console.log(secondLargest);