package jweb.coding.LibraryWebsite.Interfaces;

import java.util.List;

import jweb.coding.LibraryWebsite.Models.Publisher;

public interface PublisherService {
	public abstract Publisher createPublisher(Publisher publisher);
	public abstract List<Publisher> getSpecificPublisher(int id);
	public abstract List<Publisher> getPublishers();
}
