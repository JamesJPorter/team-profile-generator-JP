const fs = require("fs");

function generateHTML(data) {
  console.log(data)
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>My Team</title>
    </head>
    <body>
    <header>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
    <h1 class="display-4">My Team</h1>
    </div>
    </div>
    </header>
    <div class="container-fluid d-flex justify-content-center">
        ${data.map((employee) => {
          return `<div class="card m-4" style="width: 18rem;">
          <div class="card-header bg-primary">
          <h5 class="card-title pl-3 pt-2 custom-h5">${employee.name}</h5>
          <h6 class="custom-h6 card-subtitle mb-2 pl-3 pt-2">${employee.officeNumber ? `<i class="fa-solid fa-mug-hot"></i>` : ''} ${employee.getGithub ? `<i class="fa-sharp fa-solid fa-glasses"></i>` : ''} ${employee.getSchool ? `<i class="fa-solid fa-user-graduate"></i>` : ''} ${employee.getRole()}</h6>
          </div>
            <ul class="list-group list-group-flush mx-3 my-3 border bg-secondary">
              <li class="list-group-item">ID: ${employee.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
              ${
                employee.getOfficeNumber
                  ? `<li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li>`
                  : ""
              }
              ${
                employee.getGithub
                  ? `<li class="list-group-item">GitHub: <a href="${employee.getGithub()}">${employee.getGithub()}</a></li>`
                  : ""
              }
              ${
                employee.getSchool
                  ? `<li class="list-group-item">School: ${employee.getSchool()}</li>`
                  : ""
              }
            </ul>
          </div>`
        }).join('')}

        </div>
    <script src="https://kit.fontawesome.com/a147456aa8.js" crossorigin="anonymous"></script>    
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
    </html>`
}

function writeToFile(fileName, data) {
  const myTeam = generateHTML(data);
  fs.writeFile(fileName, myTeam, (error) => {
    error ? console.log(error) : console.log("success!");
  });
}

module.exports = writeToFile;
