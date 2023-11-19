// مصفوفة لتخزين معلومات الكتب
let books = [
    [1, "Start with why", "Simon Sinek", 80.0, 13],
    [2, "But how do it know", "J. Clark Scott", 59.9, 22],
    [3, "Clean Code", "Robert Cecil Martin", 50.0, 5],
    [4, "Zero to One", "Peter Thiel", 45.0, 12],
    [5, "You don't know JS", "Kyle Simpson", 39.9, 9]
  ];
  
  // إضافة كتاب جديد
  function addBook(id, title, author, price, quantity) {
    books.push([id, title, author, price, quantity]);
  }
  
  // تحديث معلومات الكتاب
  function updateBook(id, title, author, price, quantity) {
    for (let i = 0; i < books.length; i++) {
      if (books[i][0] === id) {
        books[i] = [id, title, author, price, quantity];
        break;
      }
    }
  }
  
  // حذف كتاب
  function deleteBook(id) {
    books = books.filter(book => book[0] !== id);
  }
  
  // عرض معلومات الكتب
  function displayBooks() {
    console.log("Book Id\tTitle\t\t\tAuthor\t\tPrice\tQuantity");
    for (let i = 0; i < books.length; i++) {
      console.log(`${books[i][0]}\t${books[i][1]}\t\t${books[i][2]}\t${books[i][3]}\t${books[i][4]}`);
    }
  }
  
  // الاستعلام عن كتاب
  function searchBook(query) {
    for (let i = 0; i < books.length; i++) {
      if (
        books[i][0] === query ||
        books[i][1].toLowerCase().includes(query.toLowerCase()) ||
        books[i][2].toLowerCase().includes(query.toLowerCase())
      ) {
        return books[i];
      }
    }
    return null;
  }
  
  // بيع كتاب
  function sellBook(title, quantity, balance) {
    const book = searchBook(title);
  
    if (book && book[4] >= quantity && balance >= book[3] * quantity) {
      book[4] -= quantity;
      console.log(`تم بيع ${quantity} نسخة من الكتاب "${title}" بنجاح.`);
    } else {
      console.log("خطأ في عملية البيع. يرجى التحقق من الكمية المتاحة ورصيد العميل.");
    }
  }
  
  // مثال على استخدام الوظائف
  //addBook(6, "Test Book", "Test Author", 25.0, 10);
  //displayBooks();
  
  //updateBook(6, "Updated Book", "Updated Author", 30.0, 5);
 // displayBooks();
  
  //deleteBook(6);
 // displayBooks();
  
  //const result = searchBook("Clean");
 // console.log(result ? `تم العثور على الكتاب: ${result[1]}` : "لم يتم العثور على الكتاب.");
  
  //sellBook("Start with why", 5, 1000);
  displayBooks();