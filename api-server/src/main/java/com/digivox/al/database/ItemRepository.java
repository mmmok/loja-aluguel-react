package com.digivox.al.database;

import com.digivox.al.database.model.Item;
import com.digivox.al.database.model.TipoItem;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "itens", path = "item")
@CrossOrigin(origins = "*")
public interface ItemRepository extends CrudRepository<Item, Long> {
}
