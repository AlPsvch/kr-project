package com.kaprem.controllers;

import com.kaprem.entity.Portfolio;
import com.kaprem.services.PortfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/portfolios")
public class PortfolioController {

    private PortfolioService portfolioService;

    @Autowired
    public PortfolioController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping
    public List<Portfolio> getPortfolios() {
        return portfolioService.findAllPortfolios();
    }

    @GetMapping
    @RequestMapping("/portfolio")
    public Portfolio getPortfolio(@RequestParam(name = "id") Integer id) {
        return portfolioService.getPortfolio(id);
    }
}
