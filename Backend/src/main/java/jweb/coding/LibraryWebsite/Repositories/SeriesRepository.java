package jweb.coding.LibraryWebsite.Repositories;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import jweb.coding.LibraryWebsite.Models.Series;

public interface SeriesRepository extends JpaRepository<Series, Integer>{
	List<Series> findAll();

	List<Series> findBySeriesID(int seriesID);
}