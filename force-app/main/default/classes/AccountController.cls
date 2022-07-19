public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAcountList() {
        return [SELECT Id, Name, Type, Industry from Account LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> filterAccountType(String type) {
        return [SELECT Id, Name, Type from Account where Type=:type LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> findAccounts(String searchKey) {
        String key ='%' + searchKey + '%';
        return [SELECT Id, Name, Type, Industry from Account 
        where Name like:key LIMIT 5];
    }
}
