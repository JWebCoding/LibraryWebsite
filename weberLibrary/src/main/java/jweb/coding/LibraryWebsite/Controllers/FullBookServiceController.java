package jweb.coding.LibraryWebsite.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jweb.coding.LibraryWebsite.Interfaces.FullBookService;


@RestController
@Transactional(readOnly = false)
@RequestMapping(path = "/books")
@CrossOrigin(origins = "http://localhost:3000")
public class FullBookServiceController {

	@Autowired
	FullBookService bookServicesImpl;

	@GetMapping(path = "/all")
	public ResponseEntity<Object> getBooks() {
		return new ResponseEntity<>(bookServicesImpl.getBooks(), HttpStatus.OK);
	}

	@GetMapping(path = "/twenty")
	public ResponseEntity<Object> getTwentyBooks() {
		return new ResponseEntity<>(bookServicesImpl.getTwentyBooks(), HttpStatus.OK);
	}

	@GetMapping(path = "/specific/{id}")
	public ResponseEntity<Object> getSpecificBook(@PathVariable("id") int id) {
		return new ResponseEntity<>(bookServicesImpl.getSpecificBook(id), HttpStatus.OK);
	}

	@GetMapping(path = "/search/{term}")
	public ResponseEntity<Object> searchForBook(@PathVariable("term") String term) {
		return new ResponseEntity<>(bookServicesImpl.searchForBook(term), HttpStatus.OK);
	}

}
