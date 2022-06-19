package jweb.coding.LibraryWebsite.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jweb.coding.LibraryWebsite.Interfaces.SeriesService;
import jweb.coding.LibraryWebsite.Models.Series;
import jweb.coding.LibraryWebsite.Repsoitories.SeriesRepository;

@Service
public class SeriesServiceImpl implements SeriesService{
	@Autowired SeriesRepository seriesRepository;
	@Override
	public void createSeries(Series series) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Series> getSeries() {
		return seriesRepository.findAll();
	}

}