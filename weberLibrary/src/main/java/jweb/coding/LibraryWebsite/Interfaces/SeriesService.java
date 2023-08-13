package jweb.coding.LibraryWebsite.Interfaces;

import java.util.List;

import jweb.coding.LibraryWebsite.Models.Series;

public interface SeriesService {
	public abstract Series createSeries(Series series);
	public abstract List<Series> getSpecificSeries(int id);
	public abstract List<Series> getSeries();
}
