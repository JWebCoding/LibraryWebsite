package jweb.coding.LibraryWebsite.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jweb.coding.LibraryWebsite.Exceptions.UserNotFoundException;
import jweb.coding.LibraryWebsite.Interfaces.UserService;
import jweb.coding.LibraryWebsite.Models.User;
import jweb.coding.LibraryWebsite.Repositories.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService{
	
	@Autowired UserRepository userRepository;
	
	@SuppressWarnings("finally")
	@Override
	public User getSpecificUser(int id) {
		User user=null;
		
		try {
			user=userRepository.findByUserID(id);
		} catch (Exception e) {
			printErrorMessage("getSpecficUser", e);
		} finally {
			if(user==null) {
				throw new UserNotFoundException(id);
			} else {
				return user;
			}
		}
	}
	
	public void printErrorMessage(String methodName, Exception e) {
		System.err.printf("ERROR AT %s", methodName);
		System.err.println(e.getStackTrace());
	}

}
