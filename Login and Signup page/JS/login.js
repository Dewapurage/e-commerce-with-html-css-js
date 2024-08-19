const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach((eyeIcon) => {  
  eyeIcon.addEventListener("click", () => {  
    // Get the parent .field element  
    const field = eyeIcon.closest(".field");  
    
    // Get password input field inside the same .field element  
    let pwField = field.querySelector(".password");  
    
    // Toggle password visibility  
    if (pwField.type === "password") {  
      pwField.type = "text";  
      eyeIcon.classList.replace("bx-hide", "bx-show");  
    } else {  
      pwField.type = "password";  
      eyeIcon.classList.replace("bx-show", "bx-hide");  
    }  
  });  
});
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault(); //Preventing form submit
    forms.classList.toggle("show-signup");
  })
})