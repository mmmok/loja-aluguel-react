package com.digivox.al.database;

import com.digivox.al.database.model.Cliente;
import com.digivox.al.database.model.TipoItem;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "clientes", path = "cliente")
@CrossOrigin(origins = "*")
public interface ClienteRepository extends CrudRepository<Cliente, Long> {
}
