trigger AppleWatch on Opportunity (after insert) {
    for (Opportunity opp : Trigger.new) {
        if (opp.Amount > 5000) {
            Task t = new Task();
            t.Subject     = 'AppleWatch Promo';
            t.Description = 'Send them one ASAP';
            t.Priority    = 'High';
            t.WhatId      = opp.Id;
            insert t;
        }  
    }
}