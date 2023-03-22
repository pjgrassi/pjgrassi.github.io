
document.getElementById("coverLetter").onclick = function(){
    console.log("Se capturo el evento click"); 
    document.getElementById("pro").style.display = "none";
    document.getElementById("edu").style.display = "none";
    document.getElementById("pro").style.display = "none";
    document.getElementById("pro").style.display = "none";
    document.getElementById("cover").style.display = "";

}

document.getElementById("professionalSummary").onclick = function(){
    console.log("Se capturo el evento click"); 
    document.getElementById("pro").style.display = "";
    document.getElementById("edu").style.display = "none";
    document.getElementById("exp").style.display = "none";
    document.getElementById("cert").style.display = "none";
    document.getElementById("cover").style.display = "none";

}

document.getElementById("education").onclick = function(){
    console.log("Se capturo el evento click"); 
    document.getElementById("pro").style.display = "none";
    document.getElementById("edu").style.display = "";
    document.getElementById("exp").style.display = "none";
    document.getElementById("cert").style.display = "none";
    document.getElementById("cover").style.display = "none";

}

document.getElementById("experience").onclick = function(){
    console.log("Se capturo el evento click"); 
    document.getElementById("pro").style.display = "none";
    document.getElementById("edu").style.display = "none";
    document.getElementById("exp").style.display = "";
    document.getElementById("cert").style.display = "none";
    document.getElementById("cover").style.display = "none";

}

document.getElementById("coursesCertifications").onclick = function(){
    console.log("Se capturo el evento click"); 
    document.getElementById("pro").style.display = "none";
    document.getElementById("edu").style.display = "none";
    document.getElementById("exp").style.display = "none";
    document.getElementById("cert").style.display = "";
    document.getElementById("cover").style.display = "none";

}