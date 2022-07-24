trigger BookLoan on Loan__c (before insert) {
    if (Trigger.isInsert && Trigger.isBefore)  {
        CheckSubject(trigger.new) ;
    }
}