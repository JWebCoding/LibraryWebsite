package jweb.coding.LibraryWebsite.Repsoitories;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import jweb.coding.LibraryWebsite.Models.Series;

public interface SeriesRepository extends CrudRepository<Series, Integer>{
	List<Series> findAll();

	List<Series> findBySeriesID(int seriesID);
}