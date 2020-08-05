package com.digivox.al.database;

import com.digivox.al.database.model.TipoItem;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "tiposItem", path = "tipoItem")
@CrossOrigin(origins = "*")
public interface TipoItemRepository extends CrudRepository<TipoItem, Long> {
//    List<TipoItem> findByNome(@Param("nome") String nome);
//
//    TipoItem findById(long id);
}
