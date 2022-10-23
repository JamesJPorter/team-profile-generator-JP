const Manager = require('../lib/Manager')

describe ('Manager', () => {
    it ('Should instatiate a new Manager object', () => {
        // Act 
        const newManager = new Manager();
        // Assert 
        expect(typeof newManager).toBe('object')
    })
    it ('Should set the office number property by accepting an argument.', () => {
        // Arrange 
        const officeNumber = '323';
        const newManager = new Manager();
        //Act 
        newManager.officeNumber = officeNumber;
        // Assert 
        expect(newManager.officeNumber).toEqual(officeNumber)
    })
    it ('Should retrieve the officeNumber via the use of getOfficeNumber() method.', () => {
        // Arrange
        const officeNumber = '328'
        const newManager = new Manager();
        // Act 
        newManager.officeNumber = officeNumber
        newManager.getOfficeNumber();
        // Assert 
        expect(newManager.getOfficeNumber()).toEqual(officeNumber)
    })
    it ('Should retrieve the role as Manager when method getRole() is called.', () => {
        // Act 
        const newManager = new Manager();
        // Assert 
        expect(newManager.getRole()).toEqual('Manager');
    })
})