public with sharing class CreateLoanHandler {
    public CheckSubject(List<Loan__c> newLoans) {
        for (Loan__c loan : newLoans ) {
            System.debug('inside for ' + loan);
 //           if(loan.subject ==  )
        }
        // if (reader.subject != book.subject) {
        //     "Reader can not borrow this book, because of the subject";
        // }
        // if (book.booksavaialble - book.borrowed <1 ) {
        //     "there is no more books availabl ewith this title"
        // }

    }
}
