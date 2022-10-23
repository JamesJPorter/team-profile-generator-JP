const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    it ('Should instantiate a new instance of Engineer', () => {
        // Act 
        newEngineer = new Engineer()
        // Assert 
        expect(typeof newEngineer).toBe('object')
    })
    it ('Should set value of github via arguments', () => {
        // Arrange 
        const testGithub = 'https://github.com/JamesJPorter/team-profile-generator-JP';
        // Act
        const newEngineer = new Engineer();
        newEngineer.gitHub = testGithub
        // Assert
        expect(newEngineer.gitHub).toEqual(testGithub)
    })
    it ('Should return the value of gitHub from the getgitHub() method.', () => {
        // Arrange 
        const testGithub = 'https://github.com/JamesJPorter/team-profile-generator-JP';
        const newEngineer = new Engineer();
        // Act 
        newEngineer.gitHub = testGithub
        // Assert
        expect(newEngineer.getGithub()).toEqual(testGithub)
    })
    it ('Should return Eningeer when getRole() is invoked.', () => {
        // Act 
        const testRole = new Engineer().getRole()
        // Assert
        expect(testRole).toEqual('Engineer')
    })
})
