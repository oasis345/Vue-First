package com.bitcamp.web.service;

import java.util.List;

import com.bitcamp.web.common.PageProxy;
import com.bitcamp.web.domain.CustomerDTO;

import org.springframework.stereotype.Component;

@Component
public interface CustomerService {
    public void addCustomer(CustomerDTO customer);
    public List<CustomerDTO> findCustomers(PageProxy pageProxy);
    public List<CustomerDTO> findCustomersByOption(String customerName);
    public CustomerDTO findCustomerByCustomerId(String customerId);
    public void updateCustomer(CustomerDTO customer);
    public void deleteCustomer(String customerId);
    public CustomerDTO login(String customerId, String password);
    public int count();
}