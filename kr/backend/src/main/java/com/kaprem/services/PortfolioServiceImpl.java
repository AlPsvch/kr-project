package com.kaprem.services;

import com.kaprem.entity.Portfolio;
import com.kaprem.repository.PortfolioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PortfolioServiceImpl implements PortfolioService {

    private final PortfolioRepository portfolioRepository;

    @Autowired
    public PortfolioServiceImpl(PortfolioRepository portfolioRepository) {
        this.portfolioRepository = portfolioRepository;
    }

    @Override
    public Portfolio getPortfolio(Integer id) {
        return portfolioRepository.findPortfolioById(id);
    }

    @Override
    public List<Portfolio> findAllPortfolios() {
        return portfolioRepository.findAllByShortDescriptionNotNull();
    }
}
