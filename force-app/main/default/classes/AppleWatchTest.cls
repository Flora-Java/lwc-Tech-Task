@isTest
public with sharing class AppleWatchTest {
    @isTest static void createOpportunity() {
        Opportunity opp = new Opportunity();
        opp.Name = 'Swift Deal';
        opp.StageName = 'Prospecting';
        opp.CloseDate = Date.today();
        opp.Amount = 5001;
        insert opp;
    }
}
