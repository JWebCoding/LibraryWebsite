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

import jweb.coding.LibraryWebsite.Interfaces.UserService;
import jweb.coding.LibraryWebsite.Models.User;

@RestController
@Transactional
@RequestMapping(path = "/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserServiceController {

	@Autowired UserService userServiceImpl;
	
	@GetMapping(path="specific/{id}")
	public ResponseEntity<User> getSpecificUser(@PathVariable("id")int id) {
		return new ResponseEntity<User>(userServiceImpl.getSpecificUser(id), HttpStatus.OK);
	}
}
