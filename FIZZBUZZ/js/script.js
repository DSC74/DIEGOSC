

function FizzBuzz() {



	for (let i = 1; i < 1001; i++) {

		console.log(i - 1);

		if (i % 3 == 0) {

		    console.log("Fizz");	
		}


		if (i % 5 == 0) {

		    console.log("Buzz");	
		}

		if (i % 5 == 0 && i % 3 == 0) {

		    console.log("FizzBuzz");	
		}

	}
}

FizzBuzz();