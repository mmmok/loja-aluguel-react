package com.digivox.al;

import com.digivox.al.database.TipoItemRepository;
import com.digivox.al.database.model.TipoItem;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class AlApplication {
	private static final Logger log = LoggerFactory
			.getLogger(AlApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(AlApplication.class, args);
	}

//	@Bean
//	public CommandLineRunner demo(TipoItemRepository repository) {
//		return (args) -> {
//			for (TipoItem tipoItem : repository.findAll()) {
//				log.info(tipoItem.toString());
//			}
//
//			log.info("--");
//
//			TipoItem tipoItem = repository.findById(1L);
//			log.info(tipoItem.toString());
//
//			log.info("--");
//
//			repository.findByNome("Fiat Mobi")
//					.forEach(mobi -> log.info(mobi.toString()));
//		};
//	}

}
