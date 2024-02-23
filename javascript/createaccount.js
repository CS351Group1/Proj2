// JavaScript Document
const email=document.getElementById("email")
const username=document.getElementById("username")
const password=document.getElementById("password")
const form=document.getElementById("account form")
const errorElement=document.getElementById("error")

form.addEventListener("submit", (e)=>{
	let message=[]
	if (email.value=='' || email.value==null){
		message.push("Email is required")
	}
	if (username.value=='' || username.value==null){
		message.push("Username is required")
	}
	if (password.value=='' || password.value==null){
		message.push("Password is required")
	}
	if (message.length>0){
		e.preventDefault()
		errorElement.innerText=message.join(', ')
	}
})