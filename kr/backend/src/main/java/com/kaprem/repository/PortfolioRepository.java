package com.kaprem.repository;

import com.kaprem.entity.Portfolio;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PortfolioRepository extends CrudRepository<Portfolio, Integer> {

    Portfolio findPortfolioById(Integer id);

    List<Portfolio> findAllByShortDescriptionNotNull();
}
