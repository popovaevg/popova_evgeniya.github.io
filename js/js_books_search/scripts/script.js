"use strict";

let $searchForm = $('#search-form'); //аналог querySelector
let $bookList = $('#book-list');
let $currentBook = $('#current-book');
let $bookDescription = $(".book-description");
let books = [];

$searchForm.on("submit", function (event) { //событие на клик
  event.preventDefault(); //чтобы форма сама не отправлялась и не перезагружалась страница
  let query = $(this).find('[name="srch-term"]').val().replace(/\s/g, "+"); 
  //находим input (find), получаем значение (val) , заменяем пробелы (/s) на плюсы (replace)
 
  getBooks(query); //вызов функции
});

function getBooks(query) { //функция получает запрашиваемую строку
  let url = 'https://www.googleapis.com/books/v1/volumes';
  console.log("$", $);
  $.ajax({ //объект настроек
    url,
    method: "GET",
    data: `q=${query}` //строка, которая передается на сервер = значение из submit
  }).done(function (response) { //функция успеха
    books = response.items; //массив книг
    addBooks(response.items);
    console.log(response);
  }).fail(function (error) { 
    console.log(error);
  });
}

function addBooks(data) {
  $bookList.empty();

    data.forEach((book) => {
      $("<a href=''>").addClass("list-group-item")
          .text(book.volumeInfo.title) //добавление текста
          .attr("data-id", book.id) //добавление атрибута (название, параметр)
          .appendTo($bookList); //добавляем в bookList
    });
}

$bookList.on("click", "[data-id]", function (event) { //обработчик
  event.preventDefault();
  
  let bookId = $(this).data("id"); //берем id book
  let book = books.find((item) => item.id === bookId); //возвращает объект при совпадении id

  $currentBook.fadeIn();
  $currentBook.find(".book-title").text(`${book.volumeInfo.title} 
    | ${book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "No author"} 
    ${book.volumeInfo.publishedDate}`); //в currentBook ищем book-title и устанавливаем ему текст, проверяем есть ли авторы, добавляем на вывод дату побликации

  $bookDescription.empty(); //чтобы книги не добавлялись одна за одной

  $("<img>").attr("src", book.volumeInfo.imageLinks.thumbnail)
      .appendTo($bookDescription);

  $("<p>").text(book.volumeInfo.description)
      .appendTo($bookDescription);

  $("<a>").attr("href", book.volumeInfo.previewLink) //переход на страницу предспросмотра книги
      .attr("target", "_blank") //чтобы открывать новую вкладку
      .text("Read more...") //добавляем текст на ссылку
      .addClass("read-link")
      .appendTo($bookDescription); //добавление ссылки в bookDescription
});