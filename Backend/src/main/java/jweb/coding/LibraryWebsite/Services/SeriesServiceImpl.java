package jweb.coding.LibraryWebsite.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jweb.coding.LibraryWebsite.Exceptions.SeriesNotFoundException;
import jweb.coding.LibraryWebsite.Exceptions.SeveralSeriesNotFoundException;
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

	@SuppressWarnings("finally")
	@Override
	public List<Series> getSeries() {
		List<Series> seriesList=null;
		try {
			seriesList = seriesRepository.findAll();
		} catch (Exception e) {
			printErrorMessage("getSeries",e);
		} finally {
			if(seriesList.isEmpty()) {
				throw new SeveralSeriesNotFoundException();
			} else {
				return seriesList;
			}
		}
	}

	@SuppressWarnings("finally")
	@Override
	public List<Series> getSpecificSeries(int id) {
		List<Series> seriesList=null;
		try {
			seriesList = seriesRepository.findBySeriesID(id);
		} catch (Exception e) {
			printErrorMessage("getSpecificSeries",e);
		} finally {
			if(seriesList.isEmpty()) {
				throw new SeriesNotFoundException(id);
			} else {
				return seriesList;
			}
		}
	}
	
	public void printErrorMessage(String methodName, Exception e) {
		System.err.printf("ERROR AT %s", methodName);
		System.err.println(e.getStackTrace());
	}

}