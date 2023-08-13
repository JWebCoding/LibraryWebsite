package jweb.coding.LibraryWebsite.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import jweb.coding.LibraryWebsite.Models.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	
	User findByUserID(@Param("userID")int userID);
}