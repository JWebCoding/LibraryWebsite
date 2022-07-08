package jweb.coding.LibraryWebsite.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Series {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int seriesID;
	
	String series_name;

	public int getSeriesID() {
		return seriesID;
	}

	public String getSeries_name() {
		return series_name;
	}

	
}
