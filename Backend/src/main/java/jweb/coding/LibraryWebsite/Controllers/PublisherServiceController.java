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

import jweb.coding.LibraryWebsite.Interfaces.PublisherService;
import jweb.coding.LibraryWebsite.Models.Language;
import jweb.coding.LibraryWebsite.Models.Publisher;

@Transactional
@RestController
@RequestMapping(path="/publishers")
@CrossOrigin(origins="http://localhost:8080")
public class PublisherServiceController {
	
	@Autowired PublisherService publisherServiceImpl;
	
	@GetMapping(path="/all")
	public ResponseEntity<Object> getPublishers() {
		return new ResponseEntity<>(publisherServiceImpl.getPublishers(), HttpStatus.OK);
	}
	
	@GetMapping("/specific/{id}")
	public ResponseEntity<Object> getSpecificPublisher(@PathVariable("id") int id){
		return new ResponseEntity<>(publisherServiceImpl.getSpecificPublisher(id),HttpStatus.OK);
	}
	
	@PostMapping(path = "/create")
	public ResponseEntity<Publisher> createPublisher(@RequestBody Publisher publisher) {
		try {
			return new ResponseEntity<>(publisherServiceImpl.createPublisher(publisher), HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
