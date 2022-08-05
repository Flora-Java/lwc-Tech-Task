@isTest
public with sharing class DedupeAccountTest {
    @isTest static void createAccount() {
        Account acct = new Account();
        acct.Name = 'Testing Dedupe';
        acct.Industry = 'Banking';
        insert acct;
    }
}
