const Intern = require('../lib/Intern')

describe('Intern', () => {
    it ('Should instantiate a new instance of Intern', () => {
        // Act 
        const newIntern = new Intern();
        // Assert
        expect(typeof newIntern).toBe('object');
    })

    it ('Should set the school property by accempting an argument', () => {
        // Arrange 
        const newSchool = 'UCLA';
        // Act 
        const newIntern = new Intern();
        newIntern.school = newSchool;
        // Assert 
        expect(newIntern.school).toEqual(newSchool)
    })
    it ('Should get the school property by use of the getSchool() method.', () => {
        // Arrange
        const newSchool = 'UCLA';
        const newIntern = new Intern();
        newIntern.school = newSchool
        // Act 
        const retreieveSchool = newIntern.getSchool()
        // Assert 
        expect(retreieveSchool).toEqual(newSchool)
    })
    it ('should return Intern when method getRole() is used.', () => {
        // Arrange 
        const newIntern = new Intern();
        // Act 
        const role = newIntern.getRole();
        // Assert 
        expect(role).toEqual('Intern');
    })
})