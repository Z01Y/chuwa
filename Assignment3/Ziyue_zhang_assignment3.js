/*Question 1
Given the following array and implement the table dynamically
*/

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

let studentTable = document.getElementById("styledtable");
let studentInfo = document.createElement("div");
let tableRow = document.createElement("tr");

tableInfo.tableHeader.map((ele) => {
  let tableh = document.createElement("th");
  tableh.textContent = ele;
  tableRow.appendChild(tableh);
});

studentInfo.appendChild(tableRow);

tableInfo.tableContent.map((ele) => {
  let tableDataR = document.createElement("tr");
  Object.values(ele).forEach((a) => {
    let tableData = document.createElement("td");
    tableData.textContent = a;
    tableDataR.appendChild(tableData);
  });
  studentInfo.appendChild(tableDataR);
});
styledtable.append(studentInfo);

/*
Question 2
Given the array and generate order list and unordered list dynamically as following:
*/

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
const list2 = document.getElementById("listQ2");

let ol = document.createElement("ol");
list2.appendChild(ol);

function addList(name) {
  let li = document.createElement("li");
  li.textContent = name;
  return li;
}

list.forEach((ele) => {
  ol.appendChild(addList(ele));
});

let ul = document.createElement("ul");
list2.appendChild(ul);

list.forEach((ele) => {
  ul.appendChild(addList(ele));
});

/*
Question 3
Given a array and implement a dropdown list with the following options dynamically 
FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list
*/

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

let dropdown = document.querySelector("#cities");

for (val of dropDownList) {
  let option = document.createElement("option");
  dropdown.appendChild(option);
  option.value = val.value;
  option.text = val.content;
}
