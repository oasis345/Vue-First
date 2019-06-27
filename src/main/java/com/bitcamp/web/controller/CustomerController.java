package com.bitcamp.web.controller;
import java.util.HashMap;
import java.util.List;
import java.util.function.Consumer;

import com.bitcamp.web.common.PageProxy;
import com.bitcamp.web.domain.CustomerDTO;
import com.bitcamp.web.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value="/customers")
public class CustomerController {
    // @Autowired CustomerDTO customer;
    // @Autowired CustomerService customerService;
    // @Autowired PageProxy pageProxy;

    // @GetMapping(value="/{customer_Id}/{password}")
    // public CustomerDTO login(@PathVariable("customer_Id")String customer_Id,
    //                         @PathVariable("password")String password) {
    //     return customerService.login(customer_Id, password);
    // }

    @GetMapping(value="/count")
    public String count() {
        // return customerService.count() + "";
        System.out.println("들어옴");
        return "100";
    }

    // @PostMapping(value="/join")
    // public HashMap<?, ?> requestMethodName(@RequestBody CustomerDTO params) {
    //     customerService.addCustomer(params);
    //     HashMap<String, Object> map = new HashMap<>();
    //     map.clear();
    //     map.put("result", "SUCCESS");
    //     return map;
    // }

    // @GetMapping(value="/list/{pageNum}")
    // public HashMap<String, Object> list(@PathVariable("pageNum") String pageNum) {
    //     HashMap<String, Object> map = new HashMap<>();
    //     map.put("totalCount", customerService.count());
    //     map.put("page_num", pageNum);
    //     pageProxy.execute(map);
    //     map.put("list", customerService.findCustomers(pageProxy));
    //     map.put("pxy", pageProxy);
    //     return map;
    // }

    // @GetMapping(value="/{customer_Id}")
    // public CustomerDTO customerFindId(@PathVariable("customer_Id")String customer_Id) {
    //     return customerService.findCustomerByCustomerId(customer_Id);
    // }

    // @PutMapping(value="/modify")
    // public CustomerDTO customerModify(@RequestBody CustomerDTO customer) {
    //     customerService.updateCustomer(customer);
    //     return customerService.findCustomerByCustomerId(customer.getCustomer_Id());
    // }

    // @DeleteMapping(value="/{customer_Id}")
    // public HashMap<?, ?> customerLeave(@PathVariable("customer_Id")String customer_Id) {
    //     customerService.deleteCustomer(customer_Id);
    //     HashMap<String, Object> map = new HashMap<>();
    //     map.put("result", "탈퇴 성공");
    //     return map;
    // }
    
    
}