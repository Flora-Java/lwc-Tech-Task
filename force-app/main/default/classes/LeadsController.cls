public with sharing class LeadsController {
    @AuraEnabled(cacheable=true)
    public static List<Lead> getAllLeads() {
        return [SELECT Id, Name, Company, Email, Phone, Status from Lead WITH SECURITY_ENFORCED ORDER BY Name ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Lead> getOpenNotContactedLeads() {
        return [SELECT Id, Name, Company, Email, Phone, Status from Lead WHERE Status=:'Open - Not Contacted' WITH SECURITY_ENFORCED ORDER BY Name];
    }

    @AuraEnabled(cacheable=true)
    public static List<Lead> getWorkingContactedLeads() {
        return [SELECT Id, Name, Company, Email, Phone, Status from Lead where Status=:'Working - Contacted' WITH SECURITY_ENFORCED ORDER BY Name];
    }

    @AuraEnabled(cacheable=true)
    public static List<Lead> getClosedConvertedLeads() {
        return [SELECT Id, Name, Company, Email, Phone, Status from Lead where Status=:'Closed - Converted' WITH SECURITY_ENFORCED ORDER BY Name];
    }

    @AuraEnabled(cacheable=true)
    public static List<Lead> getClosedNotConvertedLeads() {
        return [SELECT Id, Name, Company, Email, Phone, Status from Lead where Status=:'Closed - Not Converted' WITH SECURITY_ENFORCED ORDER BY Name];
    }
}
