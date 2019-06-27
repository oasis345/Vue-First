package com.bitcamp.web.domain;


import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
@Lazy
public class CustomerDTO {
    private String customer_Id, customer_Name, password, ssn,
    phone, city, address, postalcode, photo;
}