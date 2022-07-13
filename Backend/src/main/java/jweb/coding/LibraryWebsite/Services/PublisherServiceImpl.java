package jweb.coding.LibraryWebsite.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jweb.coding.LibraryWebsite.Exceptions.PublisherNotFoundException;
import jweb.coding.LibraryWebsite.Exceptions.PublishersNotFoundException;
import jweb.coding.LibraryWebsite.Interfaces.PublisherService;
import jweb.coding.LibraryWebsite.Models.Publisher;
import jweb.coding.LibraryWebsite.Repositories.PublisherRepository;

@Service
@Transactional
public class PublisherServiceImpl implements PublisherService{
	@Autowired PublisherRepository publisherRepository;
	@Override
	public Publisher createPublisher(Publisher publisher) {
		return publisherRepository.save(publisher);
	}

	@SuppressWarnings("finally")
	@Override
	public List<Publisher> getPublishers() {
		
		List<Publisher> publisherList=null;
		try {
			publisherList = publisherRepository.findAll();
		} catch (Exception e) {
			printErrorMessage("getPublishers",e);
		} finally {
			if(publisherList.isEmpty()) {
				throw new PublishersNotFoundException();
			} else {
				return publisherList;
			}
		}
	}

	@SuppressWarnings("finally")
	@Override
	public List<Publisher> getSpecificPublisher(int id) {

		List<Publisher> publisherList=null;
		try {
			publisherList=publisherRepository.findByPublisherID(id);
		} catch (Exception e) {
			printErrorMessage("getSpecificPublisher",e);
		} finally {
			if(publisherList.isEmpty()) {
				throw new PublisherNotFoundException(id);
			} else {
				return publisherList;
			}
		}
	}
	
	public void printErrorMessage(String methodName, Exception e) {
		System.err.printf("ERROR AT %s", methodName);
		System.err.println(e.getStackTrace());
	}

}