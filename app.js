PDFDocument = require('pdfkit');
fs = require('fs');
 
//Create a document
doc = new PDFDocument
 
//出力ファイルの設定
doc.pipe(fs.createWriteStream('請求書.pdf'))
 
//フォントのサイズ
doc.fontSize(30)
 
//頭のタイトル
doc.font('./fonts/ipaexm.ttf')
  .text('請求書', 50, 10)
 
 
doc.rect(170,30,380,5)
  .lineWidth(5)
  .stroke('#b4b4b4')
 
doc.fontSize(15)
doc.fillColor("black")
 
doc.text('株式会社△△', 50, 60)
doc.text('山田太郎　様', 50, 80)
 
doc.rect(60,147,230,20)
  .lineWidth(20)
  .stroke('#b4b4b4')
 
doc.fontSize(10)
  .text('下記の通りご請求申し上げます', 50, 120)
 
doc.fontSize(15)
 
doc.text('ご請求金額', 50, 150)
 
doc.text('¥200,000,000', 200, 150)
 
doc.rect(50,200,500,500)
  .lineWidth(1)
  .stroke('#b4b4b4')
 
doc.fontSize(10)
 
doc.text('品番・品名', 51, 210)
    .stroke()
 
doc.text('単価', 251, 210)
    .stroke()
 
doc.text('数量', 351, 210)
    .stroke()
 
doc.text('金額', 451, 210)
    .stroke()
 
doc.moveTo(50,230)
.lineTo(550,230)
.stroke('#b4b4b4')
 
doc.text('研究設備', 51, 240)
    .stroke()
 
doc.text('¥200,000,000', 251, 240)
    .stroke()
 
doc.text('一式', 351, 240)
    .stroke()
 
doc.text('¥200,000,000', 451, 240)
    .stroke()
 
doc.moveTo(50,260)
.lineTo(550,260)
.stroke('#b4b4b4')
 
//Finalize PDF file
doc.end()