package com.bitcamp.web.entityes;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
@Setter
@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "CUSTOMERS")
public class Customer implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String customer_Id; 

    @Column(name = "CUSTOMER_NAME")private String customerName;
    @Column(name = "PASSWORD")private String password;
    @Column(name = "SSN")private String ssn;
    @Column(name = "PHONE")private String phone;
    @Column(name = "CITY")private String city;
    @Column(name = "ADDRESS")private String address;
    @Column(name = "POSTALCODE")private String postalcode;
    @Column(name = "PHOTO")private String photo;

    @Builder
    private Customer(String customerId, String customerName,
    String password, String ssn, String phone, String city, String address, String postalcode, String photo){
        this.customer_Id = customerId;
        this.customerName = customerName;
        this.password = password;
        this.ssn = ssn;
        this.phone = phone;
        this.city = city;
        this.address = address;
        this.postalcode = postalcode;
        this.photo = photo;
    }
}