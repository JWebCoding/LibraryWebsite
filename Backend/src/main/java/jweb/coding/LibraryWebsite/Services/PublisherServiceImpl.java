package jweb.coding.LibraryWebsite.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jweb.coding.LibraryWebsite.Interfaces.PublisherService;
import jweb.coding.LibraryWebsite.Models.Publisher;
import jweb.coding.LibraryWebsite.Repsoitories.PublisherRepository;

@Service
public class PublisherServiceImpl implements PublisherService{
	@Autowired PublisherRepository publisherRepository;
	@Override
	public void createPublisher(Publisher publisher) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Publisher> getPublishers() {
		return publisherRepository.findAll();
	}

	@Override
	public List<Publisher> getSpecificPublisher(int id) {
		return publisherRepository.findByPublisherID(id);
	}

}