package jweb.coding.LibraryWebsite.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

	@Override
	public List<Publisher> getPublishers() {
		return publisherRepository.findAll();
	}

	@Override
	public List<Publisher> getSpecificPublisher(int id) {
		return publisherRepository.findByPublisherID(id);
	}

}