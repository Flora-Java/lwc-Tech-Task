trigger BookLoan on Loan__c (before insert, before update) {
    System.debug('loan trigger works ');
    if (Trigger.isBefore && Trigger.isInsert )  {
        CreateLoanHandler.CheckSubject(Trigger.new) ;
    }
    if (Trigger.isBefore && Trigger.isUpdate )  {
        CreateLoanHandler.UpdateLoan(Trigger.old) ;
    }

}