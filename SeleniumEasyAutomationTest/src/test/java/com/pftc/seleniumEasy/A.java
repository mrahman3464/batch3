package com.pftc.seleniumEasy;

public class A {
	public int a;
	public int b;
	
	public A(int a, int b) {
		this.a=a;
		this.b=b;
		
		System.out.println(a);
		System.out.println(b);
		
	}
	
	
	
	public A() {
		System.out.println("THis is no argument Constractor");
	}
	
	private String accountNumber="555555";
	protected static int ssn=44444;
	
	
	public String getAccountNumber() {
		return accountNumber;
	}


	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}


	public void display() {
		System.out.println(accountNumber);
	}
	
	
	
	public static void walk() {
		System.out.println("I can walk");
	}
	
	
	
	
	

}
