package jweb.coding.LibraryWebsite.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jweb.coding.LibraryWebsite.Interfaces.SeriesService;
import jweb.coding.LibraryWebsite.Models.Series;
import jweb.coding.LibraryWebsite.Repositories.SeriesRepository;

@Service
@Transactional
public class SeriesServiceImpl implements SeriesService{
	@Autowired SeriesRepository seriesRepository;
	@Override
	public Series createSeries(Series series) {
		return seriesRepository.save(series);
	}

	@Override
	public List<Series> getSeries() {
		return seriesRepository.findAll();
	}

	@Override
	public List<Series> getSpecificSeries(int id) {
		return seriesRepository.findBySeriesID(id);
	}

}