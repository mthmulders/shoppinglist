/**
 * Copyright 2014 Maarten Mulders
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package tk.mulders.shoppinglist.resources;

import com.codahale.metrics.annotation.Timed;
import io.dropwizard.hibernate.UnitOfWork;
import lombok.AllArgsConstructor;
import tk.mulders.shoppinglist.core.ShoppingList;
import tk.mulders.shoppinglist.db.ShoppingListDAO;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.Arrays;
import java.util.List;

@AllArgsConstructor
@Path("/shoppinglist")
@Produces(MediaType.APPLICATION_JSON)
public class ShoppingListResource {
    private final ShoppingListDAO shoppingListDAO;

    @GET
    @UnitOfWork
    @Timed
    public List<ShoppingList> all() {
        return Arrays.asList(new ShoppingList[] { });
    }
}
