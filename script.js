let input_name=document.getElementById("name")
let inputprofession=document.getElementById("profession")
let  input_about_profession=document.getElementById("abtpro")
let  input_phone_number=document.getElementById("number")
let input_emale=document.getElementById("emale")
let input_country=document.getElementById("country")
let inputskillone=document.getElementById("skillone")
let input_skilltwo=document.getElementById("skilltwo")
let inputskillthree=document.getElementById("skillthree")
let inputskillfour=document.getElementById("skillfour")
let input_startingdate=document.getElementById("sd")
let input_enddate=document.getElementById("ed")
let input_skilldetailone=document.getElementById("sdone")
let input_skilldetailtwo=document.getElementById("sdtwo")
let input_skilldetailthree=document.getElementById("sdthree")
let input_achivmentone=document.getElementById("achione")
let input_achivmenttwo=document.getElementById("achitwo")
let input_achivmentthreee=document.getElementById("achithree")
let input_passion=document.getElementById("passion")
let input_skill=document.getElementById("skill")
let inputimg=document.getElementById("img")



let myname=document.getElementById("myname")
let myprofession=document.getElementById("mypro")
let mynumber=document.getElementById("mynumber")
let mymale=document.getElementById("mymale")
let mycountry=document.getElementById("mycountry")
let aboutmypro=document.getElementById("myabtpro")
let mypro=document.getElementById('mypro')
let  input_myskillonename=document.getElementById("myskillone")
let input_myskilltwoname=document.getElementById("myskilltwo")
let input_myskillthreename=document.getElementById("myskillthree")
let  input_myskillone_details=document.getElementById("myskillone_details")
let input_myskilltwo_details=document.getElementById("myskilltwo_details")
let input_myskillthree_details=document.getElementById("myskillthree_details")
let inputachivmentone=document.getElementById("myachione")
let inputachivmenttwo=document.getElementById("myachitwo")
let inputachivmentthree=document.getElementById("myachithree")
let myskillone=document.getElementById("myskillone11")
let myskilltwo=document.getElementById("myskilltwo22")
let mypassion=document.getElementById("mypassion")
let formdiv=document.getElementById("myid")
let resumediv=document.getElementById("my")

let form=document.getElementById("form")

resumediv.style.display="none"


form.addEventListener("submit",(e)=>{

e.preventDefault()
formdiv.style.display="none"
resumediv.style.display="flex"
myname.textContent=input_name.value
myprofession.textContent=inputprofession.value
mynumber.textContent=input_phone_number.value
mymale.textContent=input_emale.value
mycountry.textContent=input_country.value
aboutmypro.textContent=input_about_profession.value
mypro.textContent=inputprofession.value
input_myskillonename.textContent= inputskillone.value
input_myskilltwoname.textContent=input_skilltwo.value
input_myskillthreename.textContent=inputskillthree.value
input_myskillone_details.textContent=input_skilldetailone.value
input_myskilltwo_details.textContent=input_skilldetailtwo.value
input_myskillthree_details.textContent=input_skilldetailthree.value
inputachivmentone.textContent=input_achivmentone.value
inputachivmenttwo.textContent=input_achivmenttwo.value
inputachivmentthree.textContent=input_achivmentthreee.value
myskillone.textContent=input_achivmenttwo.value
myskilltwo.textContent=input_achivmentthreee.value
mypassion.textContent=input_passion.value




})
let profilephoto=document.getElementById("profilephoto")

inputimg.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
             profilephoto.innerHTML = `<img src="${e.target.result}" alt="Selected Image" style="max-width: 100%;">`;
        };
        reader.readAsDataURL(file);
    } else {
        imageContainer.innerHTML = "Please select a valid image file.";
    }
});
let edit=document.getElementById("edit")
edit.addEventListener("click",()=>{

formdiv.style.display="flex"
resumediv.style.display="none"




})
let dlt=document.getElementById("dlt")

dlt.addEventListener("click",()=>{
alert("RESUME DELATE SUCESSFULLY")

    location.reload()
})
 
let funcationality=document.getElementById("funcationality")

// if(resumediv.style.display==="none"){
// funcationality.style.display="none"

// }
// else{


//     funcationality.style.display="flex"
// }