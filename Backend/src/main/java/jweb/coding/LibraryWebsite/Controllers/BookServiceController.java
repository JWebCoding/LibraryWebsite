package jweb.coding.LibraryWebsite.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jweb.coding.LibraryWebsite.Interfaces.BookService;
import jweb.coding.LibraryWebsite.Models.Book;

@RestController
@Transactional
@RequestMapping(path = "/books")
@CrossOrigin(origins = "http://localhost:8080")
public class BookServiceController {
	
	@Autowired BookService bookServiceImpl;
	
	@PostMapping(path = "/create")
	public ResponseEntity<Book> createBook(@RequestBody Book book) {
		try {
			return new ResponseEntity<>(bookServiceImpl.createBook(book), HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
