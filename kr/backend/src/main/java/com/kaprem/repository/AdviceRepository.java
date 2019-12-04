package com.kaprem.repository;

import com.kaprem.entity.Advice;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdviceRepository extends CrudRepository<Advice, Integer> {

    List<Advice> findAllByAdviceDescriptionNotNull();
}
