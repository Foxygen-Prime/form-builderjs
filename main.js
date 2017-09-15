// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [{
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
(function() {
  // Select the first element from the array
  let first = formData[0];
  // Log the first object
  console.log(first);
  // Log the string "First Name"
  console.log(first.label);
})();


// -------- Your Code Goes Below this Line --------

let formHTML = document.getElementById('fields');
for (let i = 0; i < formData.length; i++) {
  if (formData[i].type === 'select') {
    let selectLang = document.createElement('select');
    let selectlist = document.createElement('option');
    let selLangOpts = formData[i].options;

    selectLang.appendChild(selectlist);

    for (let j = 0; j < dataForm.length; j++) {
      let newOptions = document.createElement('option')
      newOptions.setAttribute('label', selLangOpts[j].label);
      newOptions.setAttribute('value', selLangOpts[j].value);
      selectLang.appendChild(newOptions);
    }
    formHTML.appendChild(selectLang)

  }
 else formData[i].type === textarea {
    let textBox = document.createElement('textarea');
    textBox.setAttribute('cols');
    textBox.setAttribute('rows');
    formHTML.appendChild(textBox);
  }

  else {
    let inputFOO = document.createElement('input');
    formHTML.appendChild(inputFOO);
    inputFOO.setAttribute('type', formData[i].type);
    inputFOO.setAttribute('placeholder', formData[i].label);
    inputFOO.setAttribute('id', formData[i].id);
    inputFOO.setAttribute('icon', formData[i].icon);
    inputFOO.setAttribute('options', formData[i].options);
  }

}



//
//find every instance of label
//make every innstance of label = that iteration of //label's value
//   }
