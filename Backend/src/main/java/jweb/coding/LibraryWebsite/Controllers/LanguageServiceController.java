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

import jweb.coding.LibraryWebsite.Interfaces.LanguageService;

@RestController
@RequestMapping(path="/languages")
@CrossOrigin(origins="http://localhost:8080")
public class LanguageServiceController {

	@Autowired LanguageService languageServiceImpl;
	
	@GetMapping(path="/all")
	@Transactional(readOnly = false)
	public ResponseEntity<Object> getBooks() {
		return new ResponseEntity<>(languageServiceImpl.getLanguages(), HttpStatus.OK);
	}
}
