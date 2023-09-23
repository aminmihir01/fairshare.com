document.getElementById('sub').addEventListener('click', validate=()=>{
        // document.getElementById('wrong_pass_alert').style.color = 'red';
        // document.getElementById('wrong_pass_alert').innerHTML = '☒ Use same password';
        // document.getElementById('create').disabled = true;
        // document.getElementById('create').style.opacity = (0.4);
        newpass=document.getElementById('pass').value;
        conpass=document.getElementById('confirm_pass').value;
        console.log(newpass);
    });

// function wrong_pass_alert() {
//     if (document.getElementById('pass').value != "" &&
//         document.getElementById('confirm_pass').value != "") {
//         alert("Your response is submitted");
//     } else {
//         alert("Please fill all the fields");
//     }
// }