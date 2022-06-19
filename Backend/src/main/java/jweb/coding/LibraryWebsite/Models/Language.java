package jweb.coding.LibraryWebsite.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Language {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int languageID;
	
	String language_name;
	String language_suffix;
	public int getLanguageID() {
		return languageID;
	}
	public String getLanguage_name() {
		return language_name;
	}
	public String getLanguage_suffix() {
		return language_suffix;
	}
	
	
}
