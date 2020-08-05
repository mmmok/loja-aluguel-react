package com.digivox.al.database;

import com.digivox.al.database.model.Aluguel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "alugueis", path = "aluguel")
@CrossOrigin(origins = "*")
public interface AluguelRepository extends CrudRepository<Aluguel, Long> {
}
