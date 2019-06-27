package com.bitcamp.web.common.lambda;



@FunctionalInterface //리턴이없고 받기만한다!!
public interface IConsumer {
    public abstract void accept(Object o); // 타입정의를 안해야하는데 오브젝트는 최상위이므로 오브젝트로 만들어서 따로 타입정의를 안하는셈이다.

    
    
}