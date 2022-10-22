const Employee = require('../lib/Employee')


describe('Employee', () => {
it ('Should create an instance of the class emeployee', () => {
    //  Act
    const newInstance = new Employee(); 
    // Assert
    expect(typeof newInstance).toBe('object')
})

it ('Should set the name via constructor arguments', () => {
    //Arrange 
    const testName = "James";
    //Act 
    const newEmp = new Employee(testName);
    //Assert 
    expect(newEmp.name).toEqual(testName);
})

it ('Should set the id via constructor arguments', () => {
    // Arrange 
    const testId = '1'; 
    // Act 
    const newEmp = new Employee('James', testId);
    // Assert
    expect(newEmp.id).toEqual(testId)
})

it ('Should set the email via constructor arguments', () => {
    // Arrange 
    const testEmail = 'porterjjames@gmail.com'; 
    // Act 
    const newEmp = new Employee('James', testEmail);
    // Assert
    expect(newEmp.id).toEqual(testEmail)
})

it ('Should get the name via getName()', () => {
    //Arrange 
    const testName = "Oliver";
    const newNameRetrieved = new Employee(testName);
    // Act 
    const empName = newNameRetrieved.getName();
    // Assert 
    expect(empName).toEqual(testName)
})

it ('Should get the Id via getId()', () => {
    // Arrange 
    const testId = '1';
    const newEmp = new Employee('James', testId);
    // Act 
    const empId = newEmp.getId();
    // Assert 
    expect(empId).toEqual(testId)
})

it ('Should get email via getEmail()', () => {
    // Arrange 
    const testEmail = 'porterjjames@gmail.com'; 
    const newEmp = new Employee('James', '1', testEmail)
    // Act 
    const empEmail = newEmp.getEmail()
    // Assert 
    expect(empEmail).toEqual(testEmail)
})
it ('Should get employee role via getRole()', () => {
    // Act 
    const newEmp = new Employee();
    const empRole = newEmp.getRole()
    // Assert 
    expect(empRole).toEqual('Employee')
})
})


