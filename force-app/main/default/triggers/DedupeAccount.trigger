trigger DedupeAccount on Account (after insert) {
    for (Account acct : Trigger.new) {
        Case newCase = new Case();
     //   newCase.Owner.Id = 'hardoce id of a new intern'
        newCase.Subject = 'Dedupe this acount';
        newCase.AccountId = acct.Id;
        newCase.OwnerId = '0058X00000ErRxOQAV';
        insert newCase;
    }
}