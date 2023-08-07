# systems manager

- Manage your resources on AWS and in multicloud and hybrid environments
- a unified user interface where you can track and resolve operational issues across services and cloud providers

## links

- [accessing secrets manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/integration-ps-secretsmanager.html)
- [security best practices](https://docs.aws.amazon.com/systems-manager/latest/userguide/security-best-practices.html)
- [state manager user guide](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-state.html)
- [faqs](https://aws.amazon.com/systems-manager/faq/)

## best practices

- become one with the dashboard

### anti patterns

## features

- automatically aggregates and displays operational data for each resource group through a dashboard
- eliminates the need for you to navigate across multiple AWS consoles to view your operational data

### pricing

- theres a free tier that microtransacts you to death
- use the pricing calculator

## basics

- operations hub for your AWS applications and resources, and is broken into four core feature groups.
  - operations Management
    - [explorer](./systemsManager-explorer.md)
    - [opsCenter](./systemsManager-opsCenter.md)
    - [incident manager](./systemsManager-incidentManager.md)
  - application management
    - [application manager](./systemsManager-applicationManager.md)
    - [app config](./systemsManager-appConfig.md)
    - [parameter store](./systemsManager-parameterStore.md)
  - change management
    - [automation](./systemsManager-automation.md)
    - [change manager](./systemsManager-changeManager.md)
    - [maintenance windows](./systemsManager-maintenanceWindows.md)
  - node management
    - [fleet manager](./systemsManager-fleetManager.md)
    - [session manager](./systemsManager-sessionManager.md)
    - [patch manager](./systemsManager-patchManager.md)
- other services
  - Connect with ITSM and ITOM Software: its some kind of JIRA integration

### Compliance Dashboard

- automatically aggregates and displays operational data for each resource group through a dashboard

### Inventory Dashboard

- collects information about system configurations and installed applications
- applications, files, network configurations, Windows services, registries, server roles, updates, and any other system properties
- manage application assets, track licenses, monitor file integrity, discover applications not installed by a traditional installer, and more.

## considerations

## integrations

- it integrates with all the foundational ops services
  - cloudtrail, cloudwatch, config, trusted advisor, personal health dashboard
