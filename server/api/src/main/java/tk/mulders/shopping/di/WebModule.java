package tk.mulders.shopping.di;

import com.google.inject.persist.PersistFilter;
import com.google.inject.servlet.ServletModule;
import tk.mulders.shopping.api.ShoppingListResource;

import java.util.HashMap;

/**
 * Guice module that contains all web-related bindings.
 */
public class WebModule extends ServletModule {
    @Override
    protected void configureServlets() {
        filter("/api/*").through(PersistFilter.class);

//        final HashMap<String, String> guiceMap = new HashMap<String, String>();
//        guiceMap.put("com.sun.jersey.config.property.packages", "tk.mulders.shopping.api;org.codehaus.jackson.jaxrs");
////        guiceMap.put(PackagesResourceConfig.PROPERTY_RESOURCE_FILTER_FACTORIES, "com.sun.jersey.api.container.filter.RolesAllowedResourceFilterFactory");
//        serve("/api/*").with(GuiceContainer.class, guiceMap);

        bind(ShoppingListResource.class);
    }
}
