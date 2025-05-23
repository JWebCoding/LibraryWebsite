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

import jweb.coding.LibraryWebsite.Interfaces.LanguageService;
import jweb.coding.LibraryWebsite.Models.Language;

@Transactional
@RestController
@RequestMapping(path="/languages")
@CrossOrigin(origins="http://localhost:3000")
public class LanguageServiceController {

	@Autowired LanguageService languageServiceImpl;
	
	@GetMapping(path="/all")
	@Transactional(readOnly = false)
	public ResponseEntity<Object> getBooks() {
		return new ResponseEntity<>(languageServiceImpl.getLanguages(), HttpStatus.OK);
	}
	
	@GetMapping("/specific/{id}")
	public ResponseEntity<Object> getSpecificBook(@PathVariable("id") int id){
		return new ResponseEntity<>(languageServiceImpl.getSpecificLanguage(id),HttpStatus.OK);
	}
	
	@PostMapping(path = "/create")
	public ResponseEntity<Language> createLanguage(@RequestBody Language language) {
		try {
			return new ResponseEntity<>(languageServiceImpl.createLanguage(language), HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
