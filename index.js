// function AutoRefresh( t ) {
//     setTimeout("location.reload(true);", t);
//  }


let x ="";
var result="";
let re="";
let boom=fetch('http://192.168.1.10/api/users/')
.then((res)=>res.json())
.then((data) => display(data))
.catch(function (error){
    console.log(error)
});
//to show data in table form

function  disp(id)
{
    // console.log(id)
    let boo=fetch('http://192.168.1.10/api/users/'+id)
.then((res)=>res.json())
.then((data) => Update(data))
.catch(function (error){
    console.log(error)
});
}
function display(data)
{
   
     result=data.result;
    console.log(result)
    let variable="<table class=table border=1><tr class=tr><td>SR</td><td>Name</td><td>Buttons</td></tr>";


for(let i=0;i<result.length;i++)
{
    
    variable+="<tr class=tr><td>"+i+"</td><td>"+result[i].name+"</td><td><input type='button' class=view value='View' onclick=View("+i+")><input type='button' class=view  value='Update'  onclick=disp("+i+")><input type='button' value='Delete' class=view   onclick=Del("+i+")></td></tr>";
}
variable+= "</table>";
document.getElementById("container").innerHTML=variable

}

//Get method

function View(id) 
{
    alert(id)
    
    fetch('http://192.168.1.10/api/users/')
    .then((res)=>res.json())
    .then((data) => {
        let i=id
        let variable="<table class=table border=1><tr class=tr><td>SR</td><td>Info</td></tr>";


        variable+="<tr><td>id</td><td>"+result[i].id+"</td></tr>"
        variable+="<tr><td>name:</td><td>"+result[i].name+"</td></tr>"
        variable+="<tr><td>email:</td><td>"+result[i].email+"</td></tr>"                     
        variable+="<tr><td>phone:</td><td>"+result[i].phone+"</td></tr>"
        variable+="<tr><td>gender:</td><td>"+result[i].gender+"</td></tr>"
        variable+="<tr><td>Country:</td><td>"+result[i].country+"</td></tr>"
        variable+="<tr><td>State:</td><td>"+result[i].state+"</td></tr>"
        variable+="<tr><td>Created_at:</td><td>"+result[i].created_at+"</td></tr>"
        variable+="<tr><td>upated_at:</td><td>"+result[i].upated_at+"</td></tr>"
        variable+="</table>"
        document.getElementById('container').innerHTML=variable

    });
    
} 

//delete method

function Del(id){
    alert(id)

let key=result[id].id

fetch(' http://192.168.1.10:80/api/user/delete/'+key,{'method':'DELETE'})
.then((res)=>res.json())
.then((data) => alert(data+"Are You Sure"))
.catch(function (error){
    console.log(error)
});

}

//post method static

// function Create(){
//     // alert(id)


//     fetch('http://192.168.1.10:80/api/auth/register',{method:'POST', body:JSON.stringify({

    
//         "name":"PAnkii",
//         "email":"gausssrav2@gmail.com",
//         "password":"12s345",
//         "address" : "Cshandigarh",
//         "phone":"123654789",
//         "gender":"male",
//         "country" : "India",
//         "state": "UT"
    
// }),
//     headers:{
//         "Content-Type":"application/json; charset=UTF-8"
    

//     } })
//     .then((res)=>res.json())
// .then((data) => console.log(data))
// .catch(function (error){
//     console.log(error)
// });

// }
 

//dynamic
function  create_data()
{
    // let value=id.data[0];
    // let i=id.data[0].id;
    // console.log(value);
    let form="";
    
            form +=" <form id='form_table'>";
            form +="<label class=no for=''>Name &nbsp;&nbsp;&nbsp;&nbsp;</label>";
            form +="<input type='text' name='name' id='name' class='input_post_form' placeholder='' ><br><br>";

            form +="<label class=no for=''>Email Id </label>";
            form +="<input type='text' name='email'  class='input_post_form' placeholder=''><br><br>";

            form +="<label class=no for=''>Password</label>";
            form +="<input type='password' name='password'  class='input_post_form' placeholder=''><br><br>";

            form +="<label class=no for=''>Address&nbsp;</label>";
            form +="<input type='text' name='address'  class='input_post_form'><br><br>";

            form +="<label class=no for=''>Phone &nbsp;&nbsp;&nbsp;</label>";
            form +="<input type='text' name='phone' id='' class='input_post_form'><br><br>";

            form +="<label class=no for=''>Gender&nbsp;&nbsp;</label>";
            form +="<input type='text' name='gender'  class='input_post_form'><br><br>";

            form +="<label class=no for=''>Country&nbsp;</label>";
            form +="<input type='text' name='country'   class='input_post_form'><br><br>";

            form +="<label class=no for=''>state   &nbsp;&nbsp;&nbsp;&nbsp;</label>";
            form +="<input type='text' name='state'  class='input_post_form'><br><br>";
            form +="<input type='submit' name='name'  value='submit' id=continue >"
            form +="</form>";
            
            document.getElementById("container").innerHTML=form;

            
            form_table.onsubmit = async (e) => {
                //auto submission

                e.preventDefault();

                let response = await fetch('http://192.168.1.10:80/api/auth/register', {
                method: 'POST',
                body: new FormData(form_table)
                });

                let result = await response.json();

                alert(result.message);
            };
}


//put

function disp(id)
{
    let key=result[id].id;

    console.log(key)
fetch('http://192.168.1.10:80/api/users/'+key )
.then(res => res.json())
.then((apidata)=> updaterecord(apidata))
.catch((error)=>{
    console.log(error)
})

}

    function updaterecord(id)
{
    let value=id.data[0];
    let i=id.data[0].id;
    console.log(id);
    let form="";
    
            form +=" <form id='form_table'>";
            form +="<label class=no for=''>Name &nbsp;&nbsp;&nbsp;&nbsp;</label>";
            form +=`<input type='text' name='name' id='name' value="${value.name}" class='input_post_form' placeholder='' ><br><br>`;

            form +="<label class=no for=''>Email Id </label>";
            form +="<input type='text' name='email' id='email' value="+value.email+" class='input_post_form' placeholder=''><br><br>";

            form +="<label class=no for=''>Password</label>";
            form +="<input type='password' name='password'  class='input_post_form' placeholder=''><br><br>";

            form +="<label class=no for=''>Address&nbsp;</label>";
            form +="<input type='text' name='address' id='address' value="+value.address+" class='input_post_form'><br><br>";

            form +="<label class=no for=''>Phone &nbsp;&nbsp;&nbsp;</label>";
            form +="<input type='text' name='phone' id='phone' value="+value.phone+" class='input_post_form'><br><br>";

            form +="<label class=no for=''>Gender&nbsp;&nbsp;</label>";
            form +="<input type='text' name='gender' id='gender' value="+value.gender+" class='input_post_form'><br><br>";

            form +="<label class=no for=''>Country&nbsp;</label>";
            form +="<input type='text' name='country' id='country' value="+value.country+" class='input_post_form'><br><br>";

            form +="<label class=no for=''>state  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</label>";
            form +="<input type='text' name='state' id='state' value="+value.state+" class='input_post_form'><br><br>";
            form +="<input type='submit' name='name' id='continue' value='submit'>"
            form +="</form>";
            
            document.getElementById("container").innerHTML=form;
        form_table.onsubmit = async (e) => {
            e.preventDefault();
            
             let name=document.getElementById("name").value;
             let email=document.getElementById("email").value;
             let address=document.getElementById("address").value;
             let phone=document.getElementById("phone").value;
            let gender=document.getElementById("gender").value;
             let country=document.getElementById("country").value;
             let state=document.getElementById("state").valdataue;

            alert(name);

           let response = await fetch('http://192.168.1.10:80/api/user/update/'+i,{ method: 'PUT' ,  body: JSON.stringify({ 
             "name":name,
            "email":email,
           "address" : address,
            "phone":phone,
            "gender":gender,
         "country" :country,
            "state": state
        }),
             headers: { 
                "Content-type": "application/json;"
            } })

             let result = await response.json();

            alert(result.message);
         };

       
}
