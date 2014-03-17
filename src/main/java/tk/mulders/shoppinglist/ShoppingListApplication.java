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
package tk.mulders.shoppinglist;

import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.db.DataSourceFactory;
import io.dropwizard.hibernate.HibernateBundle;
import io.dropwizard.jdbi.DBIFactory;
import io.dropwizard.migrations.MigrationsBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import org.skife.jdbi.v2.DBI;
import tk.mulders.shoppinglist.core.ShoppingList;

public class ShoppingListApplication extends Application<ShoppingListConfiguration> {
    private final HibernateBundle<ShoppingListConfiguration> hibernateBundle =
            new HibernateBundle<ShoppingListConfiguration>(ShoppingList.class) {
                @Override
                public DataSourceFactory getDataSourceFactory(ShoppingListConfiguration configuration) {
                    return configuration.getDatabase();
                }
            };

    @Override
    public String getName() {
        return "shoppinglist";
    }

    @Override
    public void initialize(Bootstrap<ShoppingListConfiguration> bootstrap) {
        bootstrap.addBundle(new MigrationsBundle<ShoppingListConfiguration>() {
            @Override
            public DataSourceFactory getDataSourceFactory(ShoppingListConfiguration configuration) {
                return configuration.getDatabase();
            }
        });
        bootstrap.addBundle(hibernateBundle);
        bootstrap.addBundle(new AssetsBundle("/src/main/resources/app"));
    }

    @Override
    public void run(ShoppingListConfiguration configuration, Environment environment) throws Exception {

    }

    public static void main(String[] args) throws Exception {
        new ShoppingListApplication().run(args);
    }
}
