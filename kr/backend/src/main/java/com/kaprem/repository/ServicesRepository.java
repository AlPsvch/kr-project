package com.kaprem.repository;

import com.kaprem.entity.AvailableService;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServicesRepository extends CrudRepository<AvailableService, Integer> {

    AvailableService findAvailableServiceById(Integer id);
}
