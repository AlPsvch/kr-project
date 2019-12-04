package com.kaprem.services;

import com.kaprem.entity.Portfolio;

import java.util.List;

public interface PortfolioService {

    Portfolio getPortfolio(Integer id);

    List<Portfolio> findAllPortfolios();
}
