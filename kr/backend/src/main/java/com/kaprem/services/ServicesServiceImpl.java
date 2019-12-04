package com.kaprem.services;

import com.kaprem.entity.AvailableService;
import com.kaprem.repository.ServicesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServicesServiceImpl implements ServicesService {

    private final ServicesRepository servicesRepository;

    @Autowired
    public ServicesServiceImpl(ServicesRepository servicesRepository) {
        this.servicesRepository = servicesRepository;
    }

    @Override
    public AvailableService getAvailableService(Integer id) {
        return servicesRepository.findAvailableServiceById(id);
    }
}
