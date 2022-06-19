package jweb.coding.LibraryWebsite.Interfaces;

import java.util.List;

import jweb.coding.LibraryWebsite.Models.Series;

public interface SeriesService {
	public abstract void createSeries(Series series);
	public abstract List<Series> getSeries();
}
