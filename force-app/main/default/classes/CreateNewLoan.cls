public with sharing class CreateNewLoan {
    public static void CreatingNewLoan() {
        Loan__c newLoan = new Loan__c(
        Book__c = 'a008X00000a5P47QAE',
        Loan_Out__c = System.today(),
        Reader__c = 'a018X00000XafsKQAR'
        );
        insert newLoan;
        System.debug('My new Loan = ' + newLoan );
    }
}
