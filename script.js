function lable_create(tagname, attr, attrval, content) {
  let ele = document.createElement(tagname);
  ele.setAttribute(attr, attrval);
  ele.innerHTML = content;
  return ele;
}

function break_create() {
  let break_ele = document.createElement("br");
  return break_ele;
}

function input_create(tagname, attr1, attrval1, idname) {
  let input_ele = document.createElement(tagname);
  input_ele.setAttribute(attr1, attrval1);
  input_ele.id = idname;
  return input_ele;
}

function submit_button(
  tagname,
  attr,
  attrval,
  attr1,
  attrval1,
  attrfn,
  attrfnval
) {
  let sub_ele = document.createElement(tagname);
  sub_ele.setAttribute(attr, attrval);
  sub_ele.setAttribute(attr1, attrval1);
  sub_ele.setAttribute(attrfn, attrfnval);
  return sub_ele;
}

let first_name_ele = lable_create("lable", "for", "first_name", "First Name");
let first_name_break = break_create();
let input_first_name = input_create(
  "input",
  "type",
  "first_name",
  "first_name"
);
let input_first_name_break = document.createElement("br");

let last_name_ele = lable_create("lable", "for", "last_name", "Last Name");
let last_name_break = break_create();
let input_last_name = input_create("input", "type", "last_name", "last_name");
let input_last_name_break = document.createElement("br");

let email_ele = lable_create("lable", "for", "email", "Email");
let lable_break = break_create();
let input_email = input_create("input", "type", "email", "email");
let input_break = document.createElement("br");

let pass_ele = lable_create("lable", "for", "pass", "Password");
let pass_lable_break = break_create();
let input_pass = input_create("input", "type", "pass", "pass");
let pass_input_break = document.createElement("br");

let add_element = lable_create("lable", "for", "address", "Address");
let address_lable_break = break_create();
let input_address = input_create("input", "type", "address", "address");
let address_input_break = break_create();

let submit_input = submit_button(
  "input",
  "type",
  "submit",
  "value",
  "submit",
  "onclick",
  "submitfun()"
);

function submitfun() {
  let fname = document.getElementById("first_name").value;
  console.log(fname);
  let lname = document.getElementById("last_name").value;
  console.log(lname);
  let email_t = document.getElementById("email").value;
  console.log(email_t);
  let add_t = document.getElementById("address").value;
  console.log(add_t);
}

document.body.append(
  first_name_ele,
  first_name_break,
  input_first_name,
  input_first_name_break,
  last_name_ele,
  last_name_break,
  input_last_name,
  input_last_name_break,
  email_ele,
  lable_break,
  input_email,
  input_break,
  pass_ele,
  pass_lable_break,
  input_pass,
  pass_input_break,
  add_element,
  address_lable_break,
  input_address,
  address_input_break,
  submit_input
);
