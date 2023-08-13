package jweb.coding.LibraryWebsite;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfiguration implements WebMvcConfigurer{

	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/main").setViewName("forward:/index.html");
		registry.addViewController("/view").setViewName("forward:/index.html");
		registry.addViewController("/add").setViewName("forward:/index.html");
		registry.addViewController("/test").setViewName("forward:/index.html");
	}
}
