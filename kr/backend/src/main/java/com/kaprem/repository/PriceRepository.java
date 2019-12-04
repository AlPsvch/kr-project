package com.kaprem.repository;

import com.kaprem.entity.Price;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PriceRepository extends CrudRepository<Price, Integer> {

    List<Price> findAllByPriceNotNull();
}
