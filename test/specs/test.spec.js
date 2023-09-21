const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const User = require('../utils/User')
const {shared} = require("../resources/data.properties");
const ExcelReader = require("../utils/ExcelReader");

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        const idList = 0;
        const idCredentials = 0;

        const excelReader = new ExcelReader("D://credentials_banf.xlsx");

            try {
                const cellValue = await excelReader.readCellValue(1, 1);
                console.log(`Значение ячейки (1, 1):`, cellValue);


                await excelReader.closeWorkbook();
            } catch (error) {
                console.error(error.message);
            }

        //const user = LoginPage.writeCredentials(shared.FILE_PATH, idList, idCredentials);
        //console.log(shared.FILE_PATH);
        //
        // loginPage.clickSignIN(wait);
        //
        // loginPage.userLogin(wait, user);
        // waitForPageLoad(driver, timeout);
        //
        // if (loginPage.allowUserToLogin(wait)) {
        //     loginPage.userSignOUT(wait);
        //     waitForPageLoad(driver, timeout);
        //
        //     if (loginPage.allowUserToLogin(wait)) {
        //         System.out.println("Processing complete.");
        //     }
        // }

    })
})

