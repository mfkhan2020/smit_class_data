// Chapter No 21
let change_case = "UniVerSitY";
document.getElementById("para-1a").innerHTML = "Shuffle Case String : " + change_case;

let upper_change_case = change_case.toUpperCase();
document.getElementById("btn-1a").addEventListener("click", function () 
{document.getElementById("para-1b").innerHTML = "Change to Upper Case : " + upper_change_case;});

let lower_change_case = change_case.toLowerCase();
document.getElementById("btn-1b").addEventListener("click", function () 
{document.getElementById("para-1b").innerHTML = "Change to Upper Case : " + lower_change_case;});


// Chapter No 22
let city_name = "kArAcHi";
let city_name_length = city_name.length;
document.getElementById("para-2a").innerHTML = "Shuffle Case String : " + city_name;
let first_capt = city_name.slice(0, 1).toUpperCase();
let all_small = city_name.slice(1).toLowerCase();
document.getElementById("para-2b").innerHTML = "First Letter Capital String : " + first_capt + all_small;
document.getElementById("para-2c").innerHTML = "The Length of String is : " + city_name_length;


// Chapter No 23
let comp_statement = document.getElementById("para-3a").innerHTML;
let change_comp_statment = comp_statement.indexOf("computer");
if (change_comp_statment !== -1){
    document.getElementById("para-3b").innerHTML = comp_statement.slice(0, change_comp_statment) + "PC" + comp_statement.slice(change_comp_statment + 8);
}


// Chapter No 24
let str_for_char = "Interoperability";
document.getElementById("para-4a").innerHTML = "Chracter Check String : " + str_for_char;
let str_char_check1 = str_for_char.charAt(0);
document.getElementById("para-4b").innerHTML = "Chrachter at The Begining of String : " + str_char_check1;
let str_char_check2 = str_for_char.charAt(str_for_char.length - 1);
document.getElementById("para-4c").innerHTML = "Chrachter at The End of String : " + str_char_check2;
let str_char_check3 = str_for_char.charAt(8);
document.getElementById("para-4d").innerHTML = "Chrachter at The Center of String : " + str_char_check3;


// Chapter No 25
let inp_statement = document.getElementById("para-5a").innerHTML;
let replace_statement = inp_statement.replaceAll("social media", "Online platforms");
document.getElementById("para-5b").innerHTML = replace_statement;


// Chapter No 26
let num_for_round = (Math.random() * 6);
document.getElementById("para-6a").innerHTML = "Decimal Number : " + num_for_round;
let result_round = Math.round(num_for_round);
document.getElementById("para-6b").innerHTML = "Round Number : " + result_round;

let result_ceil = Math.ceil(num_for_round);
document.getElementById("para-6c").innerHTML = "Ceiling Number : " + result_ceil;

let result_floor = Math.floor(num_for_round);
document.getElementById("para-6d").innerHTML = "Floor Number : " + result_floor;


// Chapter No 27
let num_for_rand = (Math.random() * 1358);
document.getElementById("para-7a").innerHTML = "Random Number : " + num_for_rand;

let result_round1 = Math.round(num_for_rand);
document.getElementById("para-7b").innerHTML = "Round Number : " + result_round1;

let result_ceil1 = Math.ceil(num_for_rand);
document.getElementById("para-7c").innerHTML = "Ceiling Number : " + result_ceil1;

let result_floor1 = Math.floor(num_for_rand);
document.getElementById("para-7d").innerHTML = "Floor Number : " + result_floor1;


// Chapter No 28
let str_int = "5697933.336948";
document.getElementById("para-8a").innerHTML = "String : " + str_int;

let convert_str_int = parseInt(str_int);
document.getElementById("para-8b").innerHTML = "PartseInt Number : " + convert_str_int;

let convert_str_int_float = parseFloat(str_int);
document.getElementById("para-8c").innerHTML = "ParseFloat Number : " + convert_str_int_float;

// Chapter No 29
let num_29 = "687878925.4545462";
document.getElementById("para-9a").innerHTML = "String : " + num_29 + " - " + typeof(num_29);

let conv_str_num = Number(num_29);
document.getElementById("para-9b").innerHTML = "Number : " + conv_str_num + " - " + typeof(conv_str_num);

let conv_num_str = conv_str_num.toString();
document.getElementById("para-9c").innerHTML = "String : " + conv_num_str + " - " + typeof(conv_num_str);

// Chapter No 30
let num_30 = 86947.46211254;
document.getElementById("para-10a").innerHTML = "Number to Fix: " + num_30;
let num_to_fix = num_30.toFixed(2);
document.getElementById("para-10b").innerHTML = "Number Fixed: " + num_to_fix;
