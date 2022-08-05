@isTest
public with sharing class HelloWorldTest {
    @isTest static void updateLead() {
        Lead myLead = new Lead();
        myLead.FirstName = 'Flora';
        myLead.LastName = 'Castillo';
        myLead.Company  = 'Accenture';
        insert myLead;

        myLead.Company = 'Apple';
        update myLead;
    }
}
