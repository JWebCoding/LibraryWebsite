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

import jweb.coding.LibraryWebsite.Interfaces.GenreService;
import jweb.coding.LibraryWebsite.Models.Genre;

@Transactional
@RestController
@RequestMapping(path="/genres")
@CrossOrigin(origins="http://localhost:8080")
public class GenreServiceController {
	
	@Autowired GenreService genreServicesImpl;
	
	@GetMapping(path="/all")
	public ResponseEntity<Object> getBooks() {
		return new ResponseEntity<>(genreServicesImpl.getGenres(), HttpStatus.OK);
	}
	
	@GetMapping(path="/specific/{id}")
	public ResponseEntity<Object> getSpecificBook(@PathVariable("id") int id) {
		return new ResponseEntity<>(genreServicesImpl.getSpecificGenre(id),HttpStatus.OK);
	}
	
	@PostMapping(path = "/create")
	public ResponseEntity<Genre> createGenre(@RequestBody Genre genre) {
		try {
			return new ResponseEntity<>(genreServicesImpl.createGenre(genre), HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
