package com.bitcamp.web.common.repositories;

import com.bitcamp.web.entityes.Customer;

import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository extends CrudRepository<Customer,Long> {

    
}