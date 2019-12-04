package com.kaprem.controllers;

import com.kaprem.entity.Advice;
import com.kaprem.services.AdviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/advices")
public class AdviceController {

    private AdviceService adviceService;

    @Autowired
    public AdviceController(AdviceService adviceService) {
        this.adviceService = adviceService;
    }

    @GetMapping
    public List<Advice> getAdvices() {
        return adviceService.findAllAdvices();
    }
}
