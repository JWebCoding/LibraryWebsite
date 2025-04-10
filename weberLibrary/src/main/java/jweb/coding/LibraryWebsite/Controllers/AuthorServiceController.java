package jweb.coding.LibraryWebsite.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import jweb.coding.LibraryWebsite.Interfaces.AuthorService;
import jweb.coding.LibraryWebsite.Models.Author;

@RestController
@RequestMapping(path="/authors")
@CrossOrigin(origins="http://localhost:3000")
@Transactional
public class AuthorServiceController {
	
	@Autowired AuthorService authorServiceImpl;
	
	@GetMapping(path="/all")
	public ResponseEntity<Object> getAuthors() {
		return new ResponseEntity<>(authorServiceImpl.getAuthors(), HttpStatus.OK);
	}
	
	@GetMapping(path="/specific/{id}")
	public ResponseEntity<Object> getSpecificAuthor(@PathVariable("id") int id) {
		return new ResponseEntity<>(authorServiceImpl.getSpecificAuthor(id), HttpStatus.OK);
	}
	
	@PostMapping(path = "/create")
	public ResponseEntity<Author> createAuthor(@RequestBody Author author) {
		try {
//			Author newAuthor = authorServiceImpl.createAuthor(author);
			return new ResponseEntity<>(authorServiceImpl.createAuthor(author), HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
