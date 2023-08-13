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

import jweb.coding.LibraryWebsite.Interfaces.SeriesService;
import jweb.coding.LibraryWebsite.Models.Series;

@Transactional
@RestController
@RequestMapping(path="/series")
@CrossOrigin(origins="http://localhost:8080")
public class SeriesServiceController {
	
	@Autowired SeriesService seriesServiceImpl;
	
	@GetMapping(path="/all")
	public ResponseEntity<Object> getSeries() {
		return new ResponseEntity<>(seriesServiceImpl.getSeries(), HttpStatus.OK);
	}
	
	@GetMapping("/specific/{id}")
	public ResponseEntity<Object> getSpecificSeries(@PathVariable("id") int id){
		return new ResponseEntity<>(seriesServiceImpl.getSpecificSeries(id),HttpStatus.OK);
	}
	
	@PostMapping(path = "/create")
	public ResponseEntity<Series> createSeries(@RequestBody Series author) {
		try {
			return new ResponseEntity<>(seriesServiceImpl.createSeries(author), HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
