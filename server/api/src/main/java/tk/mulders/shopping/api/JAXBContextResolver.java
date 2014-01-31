package tk.mulders.shopping.api;

import com.google.inject.Singleton;
import com.sun.jersey.api.json.JSONConfiguration;
import com.sun.jersey.api.json.JSONJAXBContext;
import lombok.extern.slf4j.Slf4j;

import javax.ws.rs.ext.ContextResolver;
import javax.ws.rs.ext.Provider;
import javax.xml.bind.JAXBContext;

/**
 * JAXBContextResolver fixes the single element array result. Since Jersey doesn't return a list
 * but a single object when the list contains only one element, this class fixes the return type.
 */
@Provider
@Singleton
@Slf4j
public class JAXBContextResolver implements ContextResolver<JAXBContext> {
    private JAXBContext context;
    private Class[] types = { };

    /**
     * Default constructor.
     * @throws Exception In case of any failure.
     */
    public JAXBContextResolver() throws Exception {
        log.debug("Initializing JAXBContextResolver.");
        this.context = new JSONJAXBContext(
                JSONConfiguration
                        .mapped()
                        .rootUnwrapping(true)
                        .arrays()
                        .build(), types);
    }

    /**
     * Gets the context.
     * @param objectType The object Type.
     * @return context The context.
     */
    public JAXBContext getContext(Class<?> objectType) {
        return context;
    }
}