package tk.mulders.shopping;

import tk.mulders.shopping.api.ShoppingListResource;

import javax.ws.rs.core.Application;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

/**
 *
 */
public class ShoppingApplication extends Application {
    @Override
    public Set<Class<?>> getClasses() {
        HashSet<Class<?>> classes = new HashSet<>();
        classes.add(ShoppingListResource.class);
        return classes;
    }
}
