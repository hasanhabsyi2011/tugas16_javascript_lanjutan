//min array
function panggilMinArray(nilai) {
	return Math.min.apply(Math, nilai)
}


//max array
function panggilMaxArray(nilai) {
	return Math.max.apply(Math, nilai)
}


nilaiminmak=[45, 100, 99, 3, 2, 81, 22, 55, 1, 2, 3, 4, 5]
console.log("Nilai Minimal : ", panggilMinArray(nilaiminmak))
console.log("Nilai Maksimal : ", panggilMaxArray(nilaiminmak))