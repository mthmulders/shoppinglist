package tk.mulders.shopping.di;

import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.Module;
import com.google.inject.persist.PersistService;
import com.google.inject.persist.jpa.JpaPersistModule;
import com.google.inject.servlet.GuiceServletContextListener;
import org.jboss.resteasy.plugins.guice.GuiceResteasyBootstrapServletContextListener;
import org.jboss.resteasy.plugins.guice.ext.JaxrsModule;
import org.jboss.resteasy.spi.ResteasyProviderFactory;

import javax.servlet.ServletContext;
import javax.servlet.annotation.WebListener;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Properties;

/**
 * Implementation of {@link javax.servlet.ServletContextListener} that
 */
@WebListener
public class GuiceContextListener extends GuiceResteasyBootstrapServletContextListener {
    @Override
    protected List<Module> getModules(ServletContext context) {



        final Properties properties = new Properties();
        try {
            properties.load(getClass().getResourceAsStream("/persistence.properties"));
        } catch (IOException ioe) {
            throw new RuntimeException(ioe);
        }

        return Arrays.asList(new Module[] {
                new JpaPersistModule("shoppinglist").properties(properties),
                new JaxrsModule(),
                new WebModule()
        });
    }

    @Override
    public void withInjector(Injector injector) {
        injector.getInstance(PersistService.class).start();
    }
}
