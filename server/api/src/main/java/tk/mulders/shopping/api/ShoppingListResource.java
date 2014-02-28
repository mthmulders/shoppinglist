package tk.mulders.shopping.api;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.Arrays;
import java.util.List;

@Path("/shoppinglists")
@Slf4j
public class ShoppingListResource {
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<MyBean> shoppinglists() {
        log.info("GET /shoppinglists");
        return Arrays.asList(new MyBean("foo"), new MyBean("bar"));
    }
}

@AllArgsConstructor
class MyBean {
    @Getter
    @Setter
    private String name;
}