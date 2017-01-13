

// function takes two numbers then apply the modulas and calculate the sum.
function generate(num1, num2,limit) {


//assign values	
	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;
	var limit = document.getElementById('limit').value;
	var before_sum_list = [];
	var sum_num = 0;
//check if all numbers below the "limit" are multiples of "num1" & "num2".

	for (var i = 1; i < limit; i++) {
		if(i % num1 === 0 || i % num2 === 0)
		{
			before_sum_list.push(i);
		}
	}

console.log(before_sum_list);

// Add all the numbers in the "before_sum_list" and present the answer.


	for (var i = 0; i < before_sum_list.length; i++) {
		
		sum_num = before_sum_list[i] + sum_num;
	}

console.log(sum_num);

	document.getElementById('result').innerHTML = sum_num;


}