package com.kaprem.services;

import com.kaprem.entity.Advice;
import com.kaprem.repository.AdviceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdviceServiceImpl implements AdviceService {

    private final AdviceRepository adviceRepository;

    @Autowired
    public AdviceServiceImpl(AdviceRepository adviceRepository) {
        this.adviceRepository = adviceRepository;
    }

    @Override
    public List<Advice> findAllAdvices() {
        return adviceRepository.findAllByAdviceDescriptionNotNull();
    }
}
