const ExcelJS = require('exceljs');

class ExcelReader {
    constructor(filePath) {
        this.filePath = filePath;
        this.workbook = new ExcelJS.Workbook();
    }

    async readCellValue(rowNumber, columnNumber, sheetIndex = 1) {
        try {
            await this.workbook.xlsx.readFile(this.filePath);
            const worksheet = this.workbook.getWorksheet(sheetIndex);
            const cell = worksheet.getCell(rowNumber, columnNumber);
            return cell.value;
        } catch (error) {
            throw new Error(`Error reading (${rowNumber}, ${columnNumber}): ${error.message}`);
        }
    }

    async closeWorkbook() {
        try {
            await this.workbook.xlsx.writeFile(this.filePath);
        } catch (error) {
            throw new Error(`Error save of book: ${error.message}`);
        }
    }
}

module.exports = ExcelReader;