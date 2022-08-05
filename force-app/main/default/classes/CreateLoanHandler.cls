public with sharing class CreateLoanHandler {
    public static void CheckSubject(List<Loan__c> newLoans) {
        System.debug('loan handler insert  is called ' + newLoans);
        List<Id> books = new List<Id>();
        List<Id> readers = new List<Id>();
        
        for (Loan__c loan : newLoans ) {   
            System.debug('inside for ' + loan);  
            books.add(loan.Book__c);
            readers.add(loan.Reader__c);
        }
        System.debug('IDs for Books  ' + books + ' and readers ' + readers);
        Map<Id,Book__c> bookMap = new Map<Id,Book__c>(
             [SELECT Id, Subject__c, Books_Available__c , Books_Loaned__c FROM Book__c where Id =: books]);
             Map<Id,Reader__c> readerMap = new Map<Id,Reader__c>(
                [SELECT Id, Subject__c, Email__c, Books_Borrowed__c  FROM Reader__c where Id =: readers]);
   
  //   Check if the reader is accessing the right book subject
  
        String bookSubject = bookMap.get(books[0]).Subject__c;
        String readerSubject = readerMap.get(readers[0]).Subject__c;
        System.debug('Subject Book  ' + bookSubject + ' subject reader ' + readerSubject ); 
        if(bookMap.get(books[0]).Subject__c !=  readerMap.get(readers[0]).Subject__c) {
           System.debug('This Reader can not borrow this book');
           
        }

  //    Check if there are books still avaialable
     //   if (book.booksavaialble - book.borrowed <1 ) {
        //     System.debug('There are no books available for this title');
        // }
//   Update number of books available
     //   book__c.Books_Available__c =  book__c.Books_Available__c - 1;
//   Update number of books borrowed
     //   book__c.Books_Loaned__c = book__c.Books_Loaned__c + 1 ;
//   Update number of books borrowed by Reader
     //   reader__c.Books_Borrowed__c = reader__c.Books_Borrowed__c + 1
//   Put Loan as active because is new
//         loan__c.Active__c = true
//    Create return date todays + 14 days
//     loan__c.Loan_Returned__c = System.today() + 14;
//  Create a task to remind the client to return the book
//   Task newTask = new Task(
//      task.description = 'reminder email for the Revol to return the Book',
//      task.email = reader__c.email__c,
//      task.ActivitDate = System.today() + 14)
// )
    }
    public static void UpdateLoan(List<Loan__c> oldLoans) {
        System.debug('loan handler insert  is called ');
//  Deactivate loan 
//    loand__c.active__c = false
//  Update number of books on the reader
//   reader__c.Books_Borrowed__c = reader__c.Books_Borrowed__c - 1
//  Update number of books available in Books
     //   book__c.Books_Available__c =  book__c.Books_Available__c + 1;
//   Update number of books borrowed
     //   book__c.Books_Loaned__c = book__c.Books_Loaned__c - 1 ;
    }
}
